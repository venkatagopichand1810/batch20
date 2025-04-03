// parse the JSON data..

// express.json()

const express = require("express");
const app = express();

// to the pase the json request bodies
app.use(express.json())

app.post("/api/data", (req, res) => {
    console.log(req.body);
    res.json({message: "Data Recived", receivedData: req.body})
});

app.listen(5002, () => console.log("server is running"))

