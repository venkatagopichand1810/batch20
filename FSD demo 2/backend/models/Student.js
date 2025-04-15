const mongoose = require("mongoose");

//define the scema for the student

const StudentSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    age: {
        type: Number, 
        required: true,
    },
    course: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("studentmanagment2025",StudentSchema)