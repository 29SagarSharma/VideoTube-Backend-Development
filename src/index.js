// require('dotenv').config({path: './env'})  //make code inconsistent becz its  require statemnt then import statemnt it can improved below.

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js"; 

dotenv.config({
    path: '../.env'
})

//console.log('Loaded environment  variables:', process.env);

//console.log(`MongoDB URI from env: ${process.env.MONGODB_URI}`);


//console.log(process.env);


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
       console.log(`Server is running at port: ${process.env.PORT}`); 
    })
})
.catch((err) => {
    console.log("MONGO db connection faied!!!",err)
})





  













/*
import express from "express";
const app = express()

( async () => {
    try {
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on("error", ()=>{
            console.log("ERRR: ", error);
            throw error  //express kki help se app not connected to database ka pta chla
         })

         app.listen(process.env.PORT, () => {
            console.log(`App is listen on port ${process.env.PORT}`);
         })
    } catch (error) {
        console.log("ERROR: ", error)
        throw err
    }
})()*/