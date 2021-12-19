const express = require('express')
var router = express.Router();

var {Product} = require('../models/Product');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/api/products', (req, res) => {
 Product.find((err,data) => {
     if(!err) {
         res.send(data);
     }
     else{
        console.log("Error in retriving data :"+ err);
     }
   });
});


router.get('/api/products/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        res.status(400).send('No Record With the Given Id: '+ req.params.id);
    }

    Product.findById( req.params.id ,(err,data) => {
        if(!err) {
            res.send(data);
        }
        else{
           console.log("Error in retriving data By Id :"+ err);
        }
      });
});

router.post('/api/products', (req, res) => {
    Product.insertMany(req.body, (err,data) => {
        if(!err) {
            res.status(200).json({ code: 200, message: 'Product Added Successfully', addProduct: data })

        }
        else{
           console.log("Error in Inserting data :"+ err);
        }
      });
   });

   router.put('/api/products/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No Record with given Id : ' + req.params.id);
    }
    Product.findByIdAndUpdate(req.params.id, req.body, (err,data) => {
        if(!err) {
            res.status(200).json({code: 200,message: 'Product Updated Successfully',updateProduct: data});
        }
        else{
           console.log("Error in Updating data :"+ err);
        }
      });
   });

   router.delete('/api/products/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No Record with given Id : ' + req.params.id);
    }
    Product.findByIdAndRemove(req.params.id, (err,data) => {
        if(!err) {
            res.status(200).json({code: 200 , message: 'Product Deleted Successfully' , deleteProduct: data});
        }
        else{
           console.log("Error in Deleting data :"+ err);
        }
      });
   });
   
   module.exports = router;

