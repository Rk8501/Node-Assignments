module.exports = (req, res, next) => {
    var jwt = require('jsonwebtoken')
    if (req.session.token) {
        var token = req.session.token
        jwt.verify(token, 'shhhhh', function (err, data) {
            if (err) res.redirect('/');
            else {
                req.user = data.user[0]
                next()
            }
        })
    }
    else
    {
        res.redirect("/");
    }

}

