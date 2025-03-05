// handle undefined variable error
// var name = "venkat";
// console.log(name)

try {
    console.log(name)
} catch(error){
    console.log("Error", error.message)
}

try {
    let num = 10; //variable
    num(); //function
} catch(error){
    console.log("Error", error.message)   
} finally {
    console.log("done")
}


// finally is the block where it is going to execute both the case positive and neg....
// finally block always exectutes regardless of whether an error occurs.