// template literals are the feature in javascript that allows us to create multi-line strings 
// and embed expressions using backticks ` ` instead " ", ' '


// without 
// const name = "venkat";
// const welcome = "Hello, " + name + " welcome";
// console.log(welcome)


// with
// const name = "venkat";
// const welcome = `Hello, ${name}  welcome`;
// console.log(welcome)



//without 
// const message = "welcome to the guvi class \n" +
// "and we are going to discuss about advanced \n" +
// "javascript topics";
// console.log(message)

//with 
// const message = `welcome to the guvi class
// and we are going to discuss about advanced 
// javascript topics`;
// console.log(message)


// embedding expressions

// const a = 5; 
// const b = 10;
// const result = `the sum of ${a} and ${b} is ${a + b}`;
// console.log(result)

// using functions inside the tempalte literals

// const getName = () => "venkat";

// const greeting = `hello, ${getName()}`;

// console.log(greeting)


// using object and arrays

// accessing the object properties 

// const user = {name: "venkat", city: "chennai"};
// const info = `User name is ${user.name} and he is from ${user.city}`;
// console.log(info)

// nested template literals

// const user = {name: "venkat", age: 31};
// const details = `user info:
// --Name: ${user.name}
// --Age: ${user.age}
// -Status: ${user.age >=18 ? "Adult" : "Minor"}
// `;

// console.log(details);


// tempalte literals in html templating

// const title = "Welcome";
// const description = "to the guvi class";

// const html = `
// <div>
//         <h1>${title}</h1>
//          <p>${description}</p>
// </div>
// `;

// console.log(html)


// in loops

const mobiles = ["LG", "oppo", "vivo"];

mobiles.forEach((mobile, index) => {
    console.log(`Mobile ${index + 1} : ${mobile}`)
})