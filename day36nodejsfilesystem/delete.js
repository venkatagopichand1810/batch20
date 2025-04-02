const fs = require("fs");

//read the file
fs.unlink("./sample.txt", (err) => {
    if(err){
        console.error("Error deleting the file", err);
        return
    }
    console.log("File deleted")
})