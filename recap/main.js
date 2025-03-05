// let a = "10";
// let b = 10;
// let c = "100";
// console.log(a - b - c);


// only in case of addition it will treat as a string and it will concatintate
// rest of all the cases it will treat as a normal ""


// let x = 10;
// let y = "10";
// console.log(x == y) //true ..value
// console.log(x === y) //false ..value and type...equality operator.


// let _1name = "venkat";
// console.log(_1name); //venkat 

// //var name should not with nu

// let $$$ = "venkat100";
// console.log($$$)


// let a = 100;
// let b = 200;
// let c = 300; 

// let a = 100, b = 200, c = 300;


// var a = 100; 
// var a = 200;
// console.log(a); ///reassinmnet and rein possible


// let name = "venkat";
// name = "venkat100";
//  console.log(name)


// const name = "ram"
// console.log(name)


// let a; 
// a = 10; 
// console.log(a)



// var a = 100;

// {
//     var a = 1000;
// }
// {
//     var a = 2000;
// }
// console.log(a); //2000


// let a = 100;

// {
//     let a = 1000;
//     console.log(a); //1000
// }
// {
//     let a = 2000;
//     console.log(a); //2000
// }
// console.log(a);



// block scope


//normal we did code
// console.log(a); //
// var a = 10;
// console.log(a);

//convert like below...hositing concpet
// var a;
// console.log(a);
// a = 10;
// console.log(a);

// number ,string, boolean, null, undefined
// hoisting..... moving the variables declaration to top of containing scope

// by default function declartions will be moved ....hoisitng

// hello();

// function hello() {
//     console.log("hi heros and heroins")
// }


//function expressions
hello();
var hello = function() {
    console.log("hi heros and heroins")
}
