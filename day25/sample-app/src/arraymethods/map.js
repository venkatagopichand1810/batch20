
// rendering the list of array strings
// function App() {
//   const mobiles = ["OPPO", "VIVO", "LG"]; //array

//   return (
//     <>
//       <ul>
//         {mobiles.map((mobile) => (
//           <li>{mobile}</li>
//         ))}

//       </ul>
//     </>
//   )

// }

// export default App

//rendering the list of objects

// function App() {

//   const users = [
//     {id: 1, name: "venkat", age: 31},
//     {id: 2, name: "ram", age: 20},
//     {id: 3, name: "john", age: 25},
//     {id: 4, name: "jack", age: 36},

//   ]

//   return (
//     <>
//     <div>
//       {users.map((user) => (
//         <div> 
//           <h1>{user.name}</h1>
//           <p>{user.age}</p>

//         </div>
//       ))}
//     </div>
      
//     </>
//   )

// }

// export default App


// tranforming data with map

// function App(){

//   const numbers = [1, 2, 3, 4, 5];

//   const doubledNumbers = numbers.map((num) => num * 2)

//   return(
//     <div>
//       {doubledNumbers.map((num) => (
//         <p>{num}</p>
//       ))}
//     </div>
//   )

// }

// export default App


// mapping an array of components

// import User from "./User"
// function App() {
//   const users = [
//         {id: 1, name: "venkat", age: 31},
//         {id: 2, name: "ram", age: 20},
//         {id: 3, name: "john", age: 25},
//         {id: 4, name: "jack", age: 36},
//       ]

//       return (
//         <div>
//             {users.map((user) => (
//                 <User name = {user.name} age = {user.age}></User>
//             ))}
//         </div>
//       )

// }

// export default App



// function App() {
//   const mobiles = ["oppo", "vivo", "lg"]; //array

//   return (
//     <>
//       <ul>
//         {mobiles.map((mobile) => (
//           <li>{mobile.toUpperCase()}</li>
//         ))}

//       </ul>
//     </>
//   )

// }

// export default App


// map with conditinal styling

// function App() {
//   const numbers = [1, 2, 3, 4, 5]; //array

//   return (
//     <>
//       <ul>
//        {numbers.map((num) => (
//         <li
//         style = {{color: num % 2 === 0 ? "green" : "red"}}
        
//         >{num}</li>
//        ))}

//       </ul>
//     </>
//   )

// }

// export default App

