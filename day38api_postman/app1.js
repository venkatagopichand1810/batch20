// import express
const express = require("express");

const app = express();

//import the hello route
const helloRoute = require("./routes/hello")

// middleware to parse the JSON
app.use(express.json());

// use the hello route for /api/hello

app.use("/api/hello", helloRoute);
app.use("/api/user", helloRoute);

// app.get("/api/hello", (req, res) => {
//     res.json({message: "hello world"})
// })

// post

// app.post("/api/user", (req, res) => {
//     const {name, email} = req.body;

//     //validation
//     if(!name || !email){
//         return res.status(400).json({error: "Name and Email are required"})
//     }

//     //send response

//     res.status(201).json({
//         message: "User is created successfully",
//         user: {
//             name: name,
//             email: email
//         }
//     })
// })


app.listen(5001, () => {
    console.log("server is running")
})

// localhost:5001/api/hello

