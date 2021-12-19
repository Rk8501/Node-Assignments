require('./models/db');
const UserModel = require('./models/User');
const express = require('express');
const app = express();

const session = require('express-session')

app.use(session({
    secret : 'secret',
    resave : false,
    saveUninitialised : true
}))
app.use(express.urlencoded({
    extended : true
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/create", (req, res) => {
    res.sendFile(__dirname + "/views/create.html");
  });
  
  app.post("/store", (req, res) => {
    UserModel.insertMany(req.body)
      .then((result) => {
        res.redirect("/");
      })
      .catch((error) => console.log(error));
  });

  app.get("/display", (req, res, next) => {
    UserModel.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.sendFile(__dirname + "/views/display.html");
      }
    });
  });

  app.get("/studentdata", (req, res) => {
    UserModel.find({}, (err, data) => {
      if (err) console.log(err);
      res.json({ data: data });
    });
  });

  app.post("/login", (req, res) => {

    if (req.session.loggedin) {
        res.redirect("/display");
    }
    else {
        UserModel.find({ 'email': req.body.email }).then((result) => {
            //const bcrypt = require('bcrypt');
            // bcrypt.compare(req.body.password, result[0].password, function (error, data) {
                if (req.body.password == result[0].password) {
                    var jwt = require('jsonwebtoken');
                    var token = jwt.sign({ user: result }, 'shhhhh');
                    req.session.loggedin = true;
                    req.session.username = req.body.email
                    req.session.token = token
                    res.redirect("/display");
                }
                else {
                    res.status(200).json("Email And Password Are wrong");
                }

        }).catch((error) => {
            res.status(201).json(error)
        })
    }
});

app.get("/delete/:id", function (req, res) {
    UserModel.findByIdAndRemove(req.params.id, function (err, data) {
      if (err) console.log(err);
      else res.redirect("/display");
    });
  });
  
  app.get("/edit/:id", (req, res) => {
    res.sendFile(__dirname + "/views/edit.html");
  });
  
  app.post("/editstudent", (req, res) => {
    UserModel.findOne({ _id: req.body._id }, (err, data) => {
      res.json({ data: data });
      console.log(req.body);
    });
  });
  
  app.post("/edit", (req, res) => {
    console.log(req.body);
    UserModel.updateOne(
      { _id: req.body._id },
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
      },
      function (err, data) {
        if (err) console.log(err);
        else res.redirect("/display");
      }
    );
  });
  
  app.get("/logout", (req, res) => {
    if (req.session.loggedin) {
        if (req.session) {
            req.session.destroy(function (err) {
                if (err) {
                    return next(err)
                }
                else {
                    res.clearCookie("connect.sid")
                    res.redirect('/');
                }
            })
        }
    }
    else {
        res.redirect("/");
    }
  });
app.listen(5000);

