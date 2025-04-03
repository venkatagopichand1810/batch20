const express = require("express");
const app = express();

// build in middlware to serve the static filles

app.use(express.static("public"));

app.listen(3001, () => console.log("server is running"))