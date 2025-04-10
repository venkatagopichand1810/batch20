const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb Connected successfully")

    } catch (err){
        console.log(err.message)
    }
}

module.exports = connectDB;