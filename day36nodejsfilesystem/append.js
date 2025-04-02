const fs = require("fs");


fs.appendFile("./sample.txt", "\narun", (err) => {
    if(err){
        console.error("Error reading the file", err);
        return
    }
    console.log("File appended successfully")
})