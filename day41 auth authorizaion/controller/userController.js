const User = require("../models/userModel");

// import the bcrypt for hashing the pwd
const bcrypt = require("bcrypt");

// import jsonwebtoken for the token creation
const jwt = require("jsonwebtoken");


// controller funtion for the user registration 

exports.register = async(req, res) =>{
    const {username, email, password} = req.body;

    try {
        // check if the user is already exists or not
        const existingUser = await User.findOne({$or: [{username}, {email}]});

        if(existingUser){
            return res.status(404).json({
                error: "user is already exits"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({username, email, password: hashPassword});
        await newUser.save();
        res.status(201).json({
            message: "User registered successfully"
        })

    } catch(error){
        res.status(400).json({
            error: "user registration is failed"
        })

    }
}


// login

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
        const token = jwt.sign({userId: user._id, email: user.email}, process.env.JWT_SECRET );
        res.json({token});

    } catch(err){
        res.status(500).json({err: err.message})
    }
}