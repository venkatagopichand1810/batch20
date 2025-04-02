const fs = require("fs");

//read the file
fs.mkdir("components", (err) => {
    if(err){
        console.error("Error creating the dir", err);
        return
    }
    console.log("dirctory has been created")
})