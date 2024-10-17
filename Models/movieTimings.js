const mongoose = require('mongoose')

const timings=new mongoose.Schema({
   time:{
    type:String
   }, 
   seats:{
       type:[],
       required:true
    }
})

module.exports=mongoose.model("Timings",timings);