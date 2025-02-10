import app from "./app.js";
import connectDB from "./db/index.js";
//require('dotenv').config({path: './env'})
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    // Error handler
    app.on("error", (error) => {
        console.error("App encountered an error: ", error);
    });
    
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection error ", error);
})






/*
const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.port || 3000
console.log("backend starting");

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.get('/youtube', (req, res) => {
    res.send('youtube dekhna hh')
})
  
// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})
*/


/*
import mongoose from "mongoose"
import DB_NAME from "./constants"

import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/