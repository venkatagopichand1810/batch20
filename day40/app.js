const express = require("express"); 
const connectDB = require("./config/db")
// const userRoutes = require("./routes/userRoutes")
const userRoutes = require('./routes/userRoutes')

require("dotenv").config(); //which will load the env variables

const app = express(); //to create the express app

// middleware to parse JSON
app.use(express.json());

//connect to MongoDB
connectDB();

const PORT = process.env.PORT;

//routes
app.use("/api/users", userRoutes)





// listen to the port number
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`)
})