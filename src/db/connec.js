 const mongoose = require("mongoose");

 mongoose.connect("mongodb://localhost:27017/registeration",{
   useNewUrlParser:true,
   useUnifiedTopology:true,
   
 }).then(() =>{
   console.log(`connection hogya hai `);

 }).catch((e)=>{
   console.log(`Bro kuch to gadbad hai`);
 })