const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/temp', { useNewUrlParser:true,useUnifiedTopology:true} , (err) =>
{ 
if(!err)
    {
        console.log('Connection Succeeded');
    }
    else{
        console.log('Error in Connection : ' + err);
    }
});

