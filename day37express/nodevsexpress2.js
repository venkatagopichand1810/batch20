// node routing (manual routing) in node js

// const http = require("http");
// const url = require("url");

// const app = http.createServer((req, res) => {
//     const path = url.parse(req.url).pathname;

//     if(path === "/"){
//         res.writeHead(200, {"Content-Type" : "text/plain"});
//         res.end("Home page")

//     } else if(path === "/about"){
//         res.writeHead(200, {"Content-Type" : "text/plain"});
//         res.end("About page")
//     } else {
//         res.writeHead(404, {"Content-Type" : "text/plain"});
//         res.end("Page not page")
//     }
// })

// // start the server
// app.listen(5001, () => {
//     console.log("server is running")
// })


const express = require("express");
const app = express();
    app.get("/", (req, res) => res.send("Home page"));
    app.get("/about", (req, res) => res.send("About page"));
    app.use((req, res) => res.send("page is not found"));

// start the server
app.listen(5001, () => {
    console.log("server is running")
})