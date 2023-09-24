const express = require('express')
const app = express()

const cors = require('cors');

app.use(cors({
    origin: '*'
    // methods: ['GET','POST','DELETE','UPDATE','PUT']
    // origin: 'http://localhost:5173'
}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) =>{
    res.send('hello from server!')
})

const http = require('http').createServer(app);

const socket = require('./socket');
socket(http);

module.exports = http;
