const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const router = require('./Routes/routes');
const dotenv = require('dotenv');
dotenv.config();

const app =express();
app.use(express.json());
app.use(
    cors(
        {  
            //origin:'http://localhost:3000',
            origin:'https://ticketbooking-moviesnow.netlify.app/',
            credentials:true,
        }
    )
);

try {
     mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Database Connected")
    })
} catch (error) {
    console.log(error);
}

app.use(router);
app.listen(4000,()=>{
    console.log("Server started")
})
 
