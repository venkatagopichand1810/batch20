const express = require("express");

const app = express();

// middlware to pares the json body from the requests

app.use(express.json());


//fake user data

let users = [
    {id: 1, name: "rama", age: 30},
    {id: 2, name: "venkat", age: 27}
]

// get to fetch all the users

app.get("/api/users", (req, res) => {
    res.json(users); //retrun all the user data
})

// fetch the singel user by ID

app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if(!user) {
        return res.status(404).json({message: "user is not found"})
    }

    res.json(user)
})


// another API to add the new product
app.post("/api/users", (req, res) => {
    const {name, age} = req.body;

    if(!name || !age){
        return res.status(404).json({message: "all fields are required"})
    }

    const newUser = {
        id: users.length + 1,
        name, 
        age
    }

    users.push(newUser); //add the new user to the users array

    //return the created user with 201 status code
    res.status(201).json(newUser)

})


// delete user remove the user by ID

app.delete("/api/users/:id", (req, res) => {
    // convert to number
    const id = parseInt(req.params.id);

    // find the index of the user
    const index = users.findIndex(user => user.id === id);

    // if user is not found, return 404
    if(index === -1){
        return res.status(404).json({message: "user is not found"})
    }

    //remove the user from the array and deleted user
    const deletedUser = users.splice(index, 1);

    // return the deleted user
    res.json(deletedUser[0])

})

// patch used update the specific fields of the user

app.patch("/api/users/:id", (req, res) => {

    // convert the id from the url to number

    const id = parseInt(req.params.id);

    // find the user object
    const user = users.find(user => user.id === id);

    //if user is not found, return 404
    if(!user){
        return res.status(404).json({message: "User not found"})
    }

    // update only the provided fields

    const {name, age} = req.body;

    if(name !== undefined) {
        user.name = name
    }

    if(age !== undefined) {
        user.age = age
    }

    //return the updated usr
    res.json(user)
})

// put -> replaces the entire user data

app.put("/api/users/:id", (req, res) => {
    //convert the ID from URL to number
    const id = parseInt(req.params.id);

    //extract name, age from the body

    const{name, age} = req.body;

    // find the index of the user with the given ID
    const index = users.findIndex(user => user.id === id);

    //if user is not found, return 404
    if(index == -1){
        return res.status(404).json({message: "user is not found"})
    }

    // replace the entire user object
    users[index] = {id, name, age};

    //return the updated user
    res.json(users[index])
})


app.listen(5001, () => {
    console.log("server is running")
})
