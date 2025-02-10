import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,   // allow to server to accept request from different origin
    credentials: true                  // enable set cookie
}));

app.use(express.json({limit: "16kb"}))                        // receive data in json
app.use(express.urlencoded({extended: true, limit: "16kb"}))  // receive data in url
app.use(express.static("public"))                             // store assets in public
app.use(cookieParser())                                       // access cookies in user browser

export default app;


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

export default app;
*/