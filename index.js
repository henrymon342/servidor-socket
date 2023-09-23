const http = require('./app');

const port = process.env.PORT || 3000

http.listen(port, () => {
    console.log('server is running on port', port);
});

// const express = require("express")
// const app = express()

// const port = process.env.PORT || 3000