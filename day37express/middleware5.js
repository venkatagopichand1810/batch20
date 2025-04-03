const express = require("express");
const app = express();
const PORT = 5004;

// customer middleware
const checkApikey = (req, res, next) => {
    const apiKey = req.query.apiKey; //Read the API key from the query params
    if(apiKey === "12345"){
        next()
    } else {
        res.status(403).send("sorry man your not admin, not possible to login")
    }
}


app.get("/admin", checkApikey, (req, res) => {
    res.send("welcome to admin page")
});


app.listen(PORT, () => {
    console.log("server is running")
})