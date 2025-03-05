// map and filter both are array methods in javascript which we used to maniplute the arrays.


// map() method....create the new array by applying the function to each element of the original array

// const numbers = [2, 3, 4, 5, 6];

// const doubleNum = numbers.map(num => num * 2);
// console.log(numbers); //original array
// console.log(doubleNum); //new array


// filter method also creates the new array containing only the elements that satisfies the given condition

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// filter the values > then 5

const filteredNumbers = values.filter(num => num > 5);
console.log(filteredNumbers)