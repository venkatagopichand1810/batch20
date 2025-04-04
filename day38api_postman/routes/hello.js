// import the express

const express = require("express");

//create the router object

const router = express.Router();


// get api to return simple hello world
router.get("/", (req, res) => {
    res.json({message: "hello world"})
})

router.post("/", (req, res) => {
    const {name, email} = req.body;

    //validation
    if(!name || !email){
        return res.status(400).json({error: "Name and Email are required"})
    }

    //send response

    res.status(201).json({
        message: "User is created successfully",
        user: {
            name: name,
            email: email
        }
    })
})

//export router
module.exports = router