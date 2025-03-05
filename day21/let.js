// we can also declare the variable using "let" keyword in javascript.

//1) Block scope of "let"

//let is block scoped, it is only accessible with the {} block where it is defined

// function letScope() {
//     if(true){
//         let x = 10; //inside the block
//         console.log(x); //this is accessible
//     }
//     console.log(x); //outside the block //not possible we can't access let outside the block 
// }
// letScope()

// 2) hositing with let(TDZ: temporal dead zone)
// let is hoisted, but it is not initialized
// accessing let before the declaration will give the "ReferenceError"

// console.log(a)
// let a = 5;
// console.log(a)

// 3) Re-declaration is not allowed with "let" whereas reassigning is possible

// unlike var, let does not allow re-declaring the same variable name in the same scope.

// let b = 10;
// // let b = 100; we should re declare with same variable name with var
// b = 100; //we can reassign the value
// console.log(b)

// let...global scope vs block scope

// a "let" variable inside the function is not accessible outside

// block scope
    // function letFunctionScope() {
    //     let c = 30;
    //     console.log(c)
    // }
    // letFunctionScope()
    // console.log(c); //we cant able to access outside

//global scope for "let"

// let d = 100; //global scope

// function letGlobalscope() {
//     console.log(d); //we can able to access since d is declared outside the function 
// }
// letGlobalscope();
// console.log(d); 


// variable shadowing with let

//if the variable is declared inside the function block with the same name as the global variable, it shadows the outer one



// let name = "venkat"; //global scope
// function shadowLet() {
//     let name = "ram" //shadows the global "name"
//     console.log(name)
// }
// shadowLet();
// console.log(name)


// let allows the re-assignment
let name = "venkat";
name = "ram";
console.log(name)