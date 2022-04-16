const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PostDB', (err)=>{
    if(err){
        console.log("Connnection Has Stopped Due to Error"+ err);
    }else{
        console.log("Connection Done Successfullly");
    }
});

module.exports = mongoose;