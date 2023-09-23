const http = require('./app');

const port = process.env.PORT || 3000

http.listen(port, () => {
    console.log('server is running on port', port);
});

// const express = require("express")
// const app = express()

// const port = process.env.PORT || 3000

// app.listen(port)

// app.get("/", ( req, res) => {
//     res.send("pagina de inicio")
// })

// console.log("Listen on port "+ port);