require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db")

const app = express();

app.use(express.json());
app.use(cors())

connectDB()

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"))



const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is running"))