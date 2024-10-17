const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const router = require('./Routes/routes');


const app =express();
app.use(express.json());
app.use(
    cors(
        {  
            origin:'http://localhost:3000',
            credentials:true,
        }
    )
);

try {
     mongoose.connect("mongodb+srv://harishragavendarraja:x29FOW4w7YLyZ1Pq@sampledata.jus9cnn.mongodb.net/MovieTicketBooking?retryWrites=true&w=majority&appName=Sampledata").then(()=>{
        console.log("Database Connected")
    })
} catch (error) {
    console.log(error);
}

app.use(router);
app.listen(4000,()=>{
    console.log("Server started")
})
 
