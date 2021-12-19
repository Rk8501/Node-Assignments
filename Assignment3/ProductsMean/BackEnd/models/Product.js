const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Product = mongoose.model('ProductTb', {
   name: {type: String},
   price: {type: Number},
   des: {type: String}
});

//Export the model
module.exports = {Product};