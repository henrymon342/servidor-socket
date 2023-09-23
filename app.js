const express = require('express')
const app = express()

const cors = require('cors');

// use it before all route definitions
app.use(cors({
    origin: '*',
    // origin: 'http://localhost:5173'
}));

app.get('/', (req, res) =>{
    res.send('hello from server!')
})

const http = require('http').createServer(app);

const socket = require('./socket');
socket(http);

module.exports = http;
