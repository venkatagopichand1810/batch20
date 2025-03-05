// scope for var, let and const in javascript refers to where variables are accessible in the code

// var
// 1) function scope meaning it is only avaliable inside the function where it is declared.
// if we declare inside the function then we cannot be accassed outside of it.
// 2) var can be declared with in the same scope
// 3) can be accessed before declartion (hoisting)

// function scope of var


// function something(){
//     if(true){
//         var x = 10; //x is declared inside the the function
//     }
//     console.log(x)
// }

// // console.log(x) ; //we cant able to access outside
// something()
// // console.log(x)


// but var is not block scoped

// if(true){
//     var y = 100;
// }
// console.log(y); 


// hoisting....our varibles declarations and function declarations will be moved to top of the containing scope.

//what we wrote 
// console.log(a); //undefined
// var a = 10;
// console.log(a)

//behind the screens in javascript

// var a;
// console.log(a); //undefined
// a = 10;
// console.log(a)


// Re-declaring of the variables with var..we can redelcare the variables in the same scope with var keyword
// with var redeclartion we have problem like overwriting th value

// var name = "venkat";
// var name = "ram";
// console.log(name);



// var function scope vs global scope.

// function scope: "var" declared inside the function stays inside the function, it wont accessible outside the function
// if "var" is declared outside the funtion , it becomes the global


// function scope
// function funscope() { 
//     var c = 100;  //this value is function scoped
//     console.log(c); //access because this is inside the function 
// }
// funscope();
// console.log(c); // "c" is in function scope we cant able to access outside of the function



//global scope

// var d = 200; //global scope
// function globalScope() {
//    console.log(d); // we can able to access inside the function 
// }
// globalScope();
// console.log(d); //this will be also accessible becuase "d" is declared as the glboal scope


// variable shadowing with var

//if the variable is re-declared inside the function, it shadows the outer variable

// var e = 50; //global variable

// function shadowVar() {
//     var e = 100; // shadows the global variable "e"
//     console.log(e)
// }
// shadowVar();
// console.log(e); //50 (global "e" remains unchanged)


// implicit global: if we assign the variable without var, let or const inse the function, it becomes global

// function implicitGlobal() {
//     g = 1000000;
// }
// implicitGlobal();
// console.log(g); 


// we can also reassign the "var" variable

var h = 20;
h = 24; // allowed
console.log(h)