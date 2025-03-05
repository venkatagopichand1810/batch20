// variables declared with "const" are block scope

//"const" is block scoped, it is only accessible with the {} block where it is defined

// function constBlock() {
//     if(true){
//         const value = 10; 
//         console.log(value)
//     }
//     console.log(value)
// }
// constBlock()


// 2) hositing with let(TDZ: temporal dead zone)
// let is hoisted, but it is not initialized
// accessing let before the declaration will give the "ReferenceError"

// console.log(a)
// const a = 5;
// console.log(a)

// 3)re-declartion is not allowed with const
//const does not allow re-declaring the variable in the same scope

const b = 10; 
// const b = 100; //we cant redeclare
// b = 200; //reassignment is not possible
// console.log(b)

// block scope
    // function letFunctionScope() {
    //     const c = 30;
    //     console.log(c)
    // }
    // letFunctionScope()
    // console.log(c); //we cant able to access outside

//global scope for "let"

// const d = 100; //global scope

// function letGlobalscope() {
//     console.log(d); //we can able to access since d is declared outside the function 
// }
// letGlobalscope();
// console.log(d); 


// variable shadowing with "const"

//if the variable is declared inside the function block with the same name as the global variable, it shadows the outer one



// const name = "venkat"; //global scope
// function shadowLet() {
//     const name = "ram" //shadows the global "name"
//     console.log(name)
// }
// shadowLet();
// console.log(name)


// in const we cannot reasign the "const" variable

// const value = 50; 
// value = 100;
// console.log(value)


//in case of const declaring and assigning the value should be in the same line
// const value; 
// value = 200;
// console.log(value)

const mobiles = {name: "oppo", price: 10000};
// mobiles = {name: "iphone"}; //it is not possible

mobiles.name = "iphone"; //we are modifing the object value
console.log(mobiles)


const numbers = [1, 2, 3, 4];
// numbers = [5, 6, 7];
numbers.push(5, 6, 7)
console.log(numbers)