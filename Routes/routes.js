const express =require('express');
const router=express.Router();
const cors=require("cors");
const movies = require('../Models/movieSchema');
const movieTimings = require('../Models/movieTimings');
const userSchema = require('../Models/userSchema');
const jwt = require('jsonwebtoken');
const movieSchema = require('../Models/movieSchema');
router.use(express.json())
// router.options(cors()); 
const JWT_SECRET = 'your_jwt_secret';

router.get('/allMovies',async(req,res)=>{
   try{
      const data = await movies.find();
      if(data)
      {
        res.json(data);
      }
   }
   catch(err)
   {
     console.log(err);
   }
})


router.post('/getTiming1',async(req,res)=>{
    const id = req.body.id;

    try{
       const data = await movies.findById(id);
       const d = data.timings[0];
       const timings = await movieTimings.findById(d);
       if(timings)
       {
         res.json(timings);
       }
    }
    catch(err)
    {
      console.log(err);
    }
 })
 
 router.post('/getTiming2',async(req,res)=>{
    const id = req.body.id;
    try{
       const data = await movies.findById(id);
       const d = data.timings[1];
       const timings = await movieTimings.findById(d);
       if(timings)
       {
         res.json(timings);
       }
    }
    catch(err)
    {
      console.log(err);
    }
 })
 
 router.post('/getTiming3',async(req,res)=>{
    const id = req.body.id;
    try{
       const data = await movies.findById(id);
       const d = data.timings[2];
       const timings = await movieTimings.findById(d);
       if(timings)
       {
         res.json(timings);
       }
    }
    catch(err)
    {
      console.log(err);
    }
 })
 
// update seats

router.post('/updateTiming1',async(req,res)=>{
    const id = req.body.did; 
    const seatUpdates = req.body.seats; 
    
    try {
      
      const data = await movies.findById(id);
      const timingId = data.timings[0]._id; 
    
      const updatedTimings = await movieTimings.findByIdAndUpdate(
        timingId,
        { $set: { seats: seatUpdates } }, 
        { new: true } 
      );
    
      if (updatedTimings) {
        res.json(updatedTimings); 
      } else {
        res.status(404).json({ message: "Timings not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
 })

 router.post('/updateTiming2',async(req,res)=>{
    const id = req.body.did; 
    const seatUpdates = req.body.seats; 
    
    try {
      
      const data = await movies.findById(id);
      const timingId = data.timings[1]._id; 
    
      const updatedTimings = await movieTimings.findByIdAndUpdate(
        timingId,
        { $set: { seats: seatUpdates } }, 
        { new: true } 
      );
    
      if (updatedTimings) {
        res.json(updatedTimings); 
      } else {
        res.status(404).json({ message: "Timings not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
 })


 router.post('/updateTiming3',async(req,res)=>{
    const id = req.body.did; 
    const seatUpdates = req.body.seats; 
    
    try {
      
      const data = await movies.findById(id);
      const timingId = data.timings[2]._id; 
    
      const updatedTimings = await movieTimings.findByIdAndUpdate(
        timingId,
        { $set: { seats: seatUpdates } }, 
        { new: true } 
      );
    
      if (updatedTimings) {
        res.json(updatedTimings); 
      } else {
        res.status(404).json({ message: "Timings not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
 })


//signin

 router.post('/signin',async(req,res)=>{
   const {email,password}  = req.body;
   try {
      const data = await userSchema.find({username:email});
      if(data.length != 0)
      {
        if(data[0].password == password)
        {
          res.send(data[0]._id); 
        }
        else{
          res.send("Wrong password");
        }  
      }
      else{
        res.send("User not found");
      }
   } catch (error) {
    
   }
})

// bookings

router.post('/getBookings',async(req,res)=>{
  const {id}  = req.body;
  try {
     const data = await userSchema.findById(id);
     if(data)
     {
       const bookings = data.bookings;
       res.send(bookings);
     }
  } catch (error) {
     res.send("error");
  }
})



router.post('/updateBookings',async(req,res)=>{
  const {count,movieid,id}  = req.body;
  try {
       const dataoriginal = await userSchema.findById(id);
       const movie = await movieSchema.findById(movieid);
      const data = await userSchema.findByIdAndUpdate(id,
       { $set: { bookings: [...dataoriginal.bookings,{"MovieName":movie.name,"count":count}]} }, 
        { new: true } 
     );
    res.send("Updated");
  } catch (error) {
     res.send("error");
  }
})




//update selected

router.post('/updateSelected1',async(req,res)=>{
  const id = req.body.did; 
  const seatUpdates = req.body.seats; 
  
  try {
    
    const data = await movies.findById(id);
    const timingId = data.timings[0]._id; 
  
    const updatedTimings = await movieTimings.findByIdAndUpdate(
      timingId,
      { $set: { seats: seatUpdates } }, 
      { new: true } 
    );
  
    if (updatedTimings) {
      res.json(updatedTimings); 
    } else {
      res.status(404).json({ message: "Timings not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
})


router.post('/updateSelected2',async(req,res)=>{
  const id = req.body.did; 
  const seatUpdates = req.body.seats; 
  
  try {
    
    const data = await movies.findById(id);
    const timingId = data.timings[1]._id; 
  
    const updatedTimings = await movieTimings.findByIdAndUpdate(
      timingId,
      { $set: { seats: seatUpdates } }, 
      { new: true } 
    );
  
    if (updatedTimings) {
      res.json(updatedTimings); 
    } else {
      res.status(404).json({ message: "Timings not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
})


router.post('/updateSelected3',async(req,res)=>{
  const id = req.body.did; 
  const seatUpdates = req.body.seats; 
  
  try {
    
    const data = await movies.findById(id);
    const timingId = data.timings[2]._id; 
  
    const updatedTimings = await movieTimings.findByIdAndUpdate(
      timingId,
      { $set: { seats: seatUpdates } }, 
      { new: true } 
    );
  
    if (updatedTimings) {
      res.json(updatedTimings); 
    } else {
      res.status(404).json({ message: "Timings not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
})








// For Feeding test data


router.get('/userFeed',async(req,res)=>{
   const data = new userSchema({
      "username":"test1@gmail.com",
      "password":"123456",
      "bookings":[]
   })
   try {
      data.save().then(()=>{
        res.send("User Feeded");
      })
   } catch (error) {
     res.send("Error in feeding data")
   }
})


router.get('/feed',async(req,res)=>{
        
    const timing1 = new movieTimings(
        {
            "time":"10.00 AM",
            "seats":[
                     {
                        booked:false,
                        selected:false
                    }
                   ,
                   {
                    booked:false,
                    selected:false
                }
                ,
                {
                  booked:false,
                  selected:false
                }
                ,
                {
                  booked:false,
                  selected:false
                }
                ,
                {
                  booked:false,
                  selected:false
                }
                ,
                {
                  booked:false,
                  selected:false
                }
                ,
                {
                  booked:false,
                  selected:false
                }
                ,
                {
                  booked:false,
                  selected:false
                }
                ,
                {
                  booked:false,
                  selected:false
                }
                ,
                {
                  booked:false,
                  selected:false
                }
            ]
        }
    )

    const timing2 = new movieTimings(
        {
            "time":"1.00 PM",
            "seats":[
                {
                  booked:false,
                  selected:false
                }
               ,
               {
                booked:false,
                selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            } 
            ]
        }
    )

    const timing3 = new movieTimings(
        {
            "time":"6.00 PM",
            "seats":[
                {
                  booked:false,
                  selected:false
                }
               ,
               {
                booked:false,
                selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            }
            ,
            {
              booked:false,
              selected:false
            } 
            ]
        }
    )

    

      try{
        timing1.save()
        timing2.save()
        timing3.save()
        .then(()=>{
             try {
                const newData=new movies(
                    { "name":"Leo",
                      "timings":[timing1._id,timing2._id,timing3._id]
                    })
                newData.save().then(()=>{
                    res.send("Movie Updated");
                })  
             } catch (error) {
                console.log("Error in Movies");
             }
        }).then(()=>{
            res.send("Feed done");
        })
      }
      catch{
        console.log("Error in seats");
      }

         
           
})

module.exports = router;