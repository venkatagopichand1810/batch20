const express = require("express");
const app = express();
const userRoutes = require("./routes/users");

app.use("/users", userRoutes);

app.listen(5001, () => console.log("server is running"))


