// import the mongoose

const mongoose = require("mongoose");

// define the schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String, 
        required: true
    }
})

// create the user model

const User = mongoose.model("User", userSchema);

module.exports = User