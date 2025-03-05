// error handling in javascript is used to manage and respond to runtime errors/

//javascript provides multiple ways to handle the errors we can use try, catch, throw and finally....


// let x = 10;
// // let a = 2
// let y = x / a;
// console.log(y)


// try {
//     let x = 10;
//     let y = x / a;
// } catch(error){
//     console.log("an error occurred", error.message)
// }
 


// function checkAge(age){
//     if(age < 18){
//         throw new Error("You must be 18 or older to vote")
//     }
//     return "Access granted to enter the vote booth "
// }


// try {
//     console.log(checkAge(10)) 
// } catch(error){
//     console.log("Error is:", error.message)
// }



// something();

// try {
//     something();
// } catch(error){
//     console.log("Error is", error.message)
// }


function divide(a, b){
    try {
        if(b === 0){
            throw new Error("number cannot divide by zero")
        }
        //peform the division
        return a / b;
    } catch(error){
        //log the the error message
        console.log("Error", error.message)
    }
}

// console.log(divide(10, 0)); 
console.log(divide(10, 2))