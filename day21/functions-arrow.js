// normal function vs arrow function


// normal function declaration

// function greet(name){
//     return "Hello, " + name;
// }
// console.log(greet("leena"))

// arrow functions
// const greet = (name) => {
//         return "Hello, " + name;
//     }
// console.log(greet("leena"))

//if we have only one statement

// const greet = (name) => "Hello, " + name;
// console.log(greet("leena"))
// arrow functions are shorter and automatically return the value if there is only one statement


// function expresion vs arrow function

//function expression (traditional)
// const add = function(a, b) {
//     return a + b
// }
// console.log(add(10, 20))


// arrow functions
// const add = (a, b) => a + b;
// console.log(add(50, 20))


//function without parameters

//normal function
// function hihello() {
//     return "hello"
// }
// console.log(hihello())


//arrow function without any parameters

// const hihello = () => "hello";
// console.log(hihello())



// single paremeter

// with normal function
// function sqaure(x) {
//     return x * x
// }

// console.log(sqaure(4))


//with arrow function

// const sqaure = x => x * x

// console.log(sqaure(4));

// normal function multiline statements vs arrow functions multiline statements

// normal function

// function multiply(a, b){
//     let result = a * b;
//     return result
// }

// console.log(multiply(3, 4))


// arrow functions

// const multiply = (a, b) => {
//     let result = a * b;
//     return result
// }

// console.log(multiply(3, 4))



// "this" keyword behavior

// normal function...this refers to the calling object

// const obj = {
//     value: 10000000, 
//     normalFunction: function() {
//         console.log(this.value); //"this" refers to the calling object (obj)
//     }
// };

// obj.normalFunction()


// const obj = {
//     value: 10000000, 
//     normalFunction: function() {
//         setTimeout(() => {
//             console.log(this.value); //"this" refers to the window object
//         })

//     }
// };

// obj.normalFunction()


// arrow function in map()

// normal function 

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(function(num){
//     return num * 2;
// });

// console.log(doubled);

// arrow functions
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2);

// console.log(doubled);



//in settimeout

// normal function

// const user = {
//     name: "venkat",
//     welcome: function() {
//         setTimeout(function() {
//             console.log("hello, " + this.name)
//         })
//     }
// }
// user.welcome(); //undefined


// arrow function

// const user = {
//     name: "venkat",
//     welcome: function() {
//         setTimeout(() =>{
//             console.log("hello, " + this.name)
//         })
//     }
// }
// user.welcome(); //hello venkat

// fetch and promise 

//using normal function
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })

// arrow functions
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))

