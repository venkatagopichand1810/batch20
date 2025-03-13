

// // forEach method is used to execute the function for each element in an array., forEach does not return the new array


// // function App() {
// //   const mobiles = ["LG", "OPPO", "VIVO"];

// //   const handleClick = () => {
// //     mobiles.forEach((mobile) => {
// //       console.log(mobile)
// //     })
// //   }


// //   return (
// //     <div>
// //       <button onClick = {handleClick}>Mobiles</button>
// //     </div>
// //   )


// // }

// // export default App



// function App(){
//     const numbers = [1, 2, 3, 4, 5, 6];
    
//     const doublethenum = () => {
//       numbers.forEach((num, index) => {
//         numbers[index] = num * 2;
//       });
//       console.log(numbers)
//     }
//       return(
//         <>
        
//         <button onClick = {doublethenum}>Double</button>
        
//         </>
//       )
//     }
    
//     export default App
    
    
//     // i wanted to increase the age of the user with 2
    
    
    
//     function App(){
//      const users = [
//       {id: 1, name: "rama", age: 25},
//       {id: 2, name: "shiva", age: 56},
//      ]
      
//       const increaseAge = () => {
//         users.forEach((user) => {
//          user.age +=100 ;
//         });
//         console.log(users)
//       }
//         return(
//           <>
          
//           <button onClick = {increaseAge}>IncreaseAge</button>
          
//           </>
//         )
//       }
      
//       export default App