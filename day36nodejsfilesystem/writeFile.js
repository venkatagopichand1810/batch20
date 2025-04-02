const fs = require("fs");


fs.writeFile("./sample.txt", "venkattttttttttttttttttttt", (err) => {
    if(err){
        console.error("Error reading the file", err);
        return
    }
    console.log("File written successfully")
})