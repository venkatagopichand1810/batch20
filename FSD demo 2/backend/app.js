const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

// load the env variables
dotenv.config();

// express app
const app = express()

//connect to the database
connectDB();
app.use(express.json());
app.use(cors()); //to fix the cors issues..when we access one server from another server 

// define the routes
app.use("/api/students", require("./routes/studentRoutes"))

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("server is running "))