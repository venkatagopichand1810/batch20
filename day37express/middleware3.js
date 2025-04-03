//  req -> contains the details about the incoming request.
// res -> sends the response to the client
// next -> passes the control to the next middleware in the chain

const express = require("express");

const app = express();

//middlware to log the request details

app.use((req, res, next) => {
    console.log(`method ${req.method}, URL: ${req.url}`);
    console.log("middleware 1")
    next(); //passes the control to the next middlware 
})

app.use((req, res, next) => {
    console.log(`method ${req.method}, URL: ${req.url}`);
    console.log("middleware 2")
    next(); //passes the control to the next middlware 
})
// middlware
app.get("/about", (req, res) => {
    res.send("hello hi how are you")
})

app.listen(5004, () => {
    console.log("server is running")
})