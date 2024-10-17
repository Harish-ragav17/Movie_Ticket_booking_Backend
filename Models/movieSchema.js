const mongoose = require('mongoose')

const movies=new mongoose.Schema({
      name:{
        type:String,
        required:true
      },
      timings:{
        type:[],
        required:true
      }
})

module.exports=mongoose.model("Movies",movies);