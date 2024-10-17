const mongoose = require('mongoose')

const user=new mongoose.Schema({
   username:{
    type:String
   }, 
   password:{
    type:String
   }
   ,
   bookings:{
    type:[]
   }
})

module.exports=mongoose.model("users",user);