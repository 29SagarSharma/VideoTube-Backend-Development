// require('dotenv').config({path: './env'})  //make code inconsistent becz its  require statemnt thenimport statemnt it can improved below.

import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();





  













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