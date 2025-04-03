// ///api 

// const http = require("http");
// const url = require("url");

// const app = http.createServer((req, res) => {
//     const path = url.parse(req.url).pathname;

//     if(path === "/api/users"){
//         res.writeHead(200, {"Content-Type" : "application/json"});
//         res.end(JSON.stringify(
//             [
//                 {id: 1, name: "venkat"},
//                 {id: 2, name: "rama"},
//                 {id: 3, name: "shyam"}

//             ]
//         ))

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
    app.get("/api/users", (req, res) => res.json([
        {id: 1, name: "venkat"},
        {id: 2, name: "rama"},
        {id: 3, name: "shyam"}
    ]));
    app.get("/about", (req, res) => res.send("About page"));
    app.use((req, res) => res.send("page is not found"));

// start the server
try{
    app.listen(5001, () => {
        console.log("server is running")
    })
} catch(error){
    console.error("error starting the server")
}
