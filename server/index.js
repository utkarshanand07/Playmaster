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
