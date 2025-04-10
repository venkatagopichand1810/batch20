const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {

    const {name, email, password, role} = req.body;
    const hashed = await bcrypt.hash(password, 10); //it will create the hashed password
    try {
        const user = await User.create({name, email, password: hashed, role})
        res.status(201).json({message: "Users is registered successfully"})

    } catch(err){
        res.status(400).json({err: err.message})
    }

}

exports.login = async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "Invalid credentials"})
        }
        const match = await bcrypt.compare(password, user.password);
        if(!match){
            return res.status(400).json({message: "Invalid credentials"}) 
        }
        const token = jwt.sign({userId: user._id, role: user.role}, process.env.JWT_SECRET );
        res.json({token});

    } catch(err){
        res.status(500).json({err: err.message})
    }

}