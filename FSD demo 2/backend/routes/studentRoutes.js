const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
router.get("/", async(req, res) => {
    try {
        const students = await Student.find();
        res.json(students); //get call

    } catch(error){
        res.status(500).send("server error")
    }
})


router.post("/", async(req, res) => {
    const{name, age, course} = req.body;

    try {
        const newStudent = new Student({
            name, 
            age, 
            course
        })
        const student = await newStudent.save();
        res.json(student)
    } catch(error){
        res.status(500).send("server errror")
    }
})


module.exports = router;