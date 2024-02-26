const mongoose = require("mongoose")



const dbConnection = async () =>{

   const db = await mongoose.connect('mongodb+srv://bijeeshbstackup:bijeesh1999@cluster0.8roueeq.mongodb.net/')
   if(db){
    console.log('sucess connection');
   }else{
    console.log('error Connection');
   }

}



module.exports = dbConnection