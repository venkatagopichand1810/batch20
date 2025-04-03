// express.urlencoded() -> parsing form data
const express = require("express");
const app = express();

// middleware
app.use(express.urlencoded({extended: true}))

app.post("/submit-form", (req, res) => {
    console.log(req.body);
    res.json(`Received form data: ${JSON.stringify(req.body)}`)
});

app.listen(5002, () => console.log("server is running"))


