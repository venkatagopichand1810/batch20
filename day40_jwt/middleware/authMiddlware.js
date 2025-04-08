const jwt = require("jsonwebtoken");

// middlware to protect the routes

module.exports = function(req, res, next) {
    // get token from header

    const token = req.header("x-auth-token");

    // check if no token
    if(!token){
        return res.status(401).json({msg: "No token provided, authroziaton denied"})
    }

    try {
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch(err){
        res.status(401).json({msg: "token is not valid"})
    }
}