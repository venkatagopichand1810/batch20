// // creating the expres server

// const express = require("express"); //import the express module
// const app = express(); //create the express app
// const PORT = 5001; // define the port number


// app.get("/", (req, res) => {
//     res.send("hello express")
// })

// // start the server
// app.listen(PORT, () => {
//     console.log("server is running")
// })


//creating the server in node js

const http = require("http");
const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"})
    res.end("hello node js")
})

// start the server
app.listen(5001, () => {
    console.log("server is running")
})

