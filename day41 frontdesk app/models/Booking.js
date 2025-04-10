const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    customeName: String,
    service: String,
    email: String,
    date: Date,
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model("Booking", bookingSchema)