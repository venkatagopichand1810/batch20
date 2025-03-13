// // filter method creates the new array with the elements that satisfy the given condition without modifiying the original array..

// // function App() {

// //   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

// //   const evenNumbers = numbers.filter(num => num % 2 !== 0);

// //   return (
// //     <div>
// //       <h2>Even Numbers</h2>
// //       <ul>
// //         {evenNumbers.map((num) => (
// //           <li>{num}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   )

// // }

// // export default App




// // function App() {

// //   const numbers = [1, -2, 3, 4, 5, -6, 7, 8, -9, -10];

// //   const evenNumbers = numbers.filter(num => num > 0);

// //   return (
// //     <div>
// //       <ul>
// //         {evenNumbers.map((num) => (
// //           <li>{num}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   )

// // }

// // export default App

// // fitler the strings bases on the length

// function App() {
//     const mobiles = ["LG", "oppo", "vivo", "samsung"]
   
//     const mobilLength = mobiles.filter(mobile => mobile.length >= 5)
   
//      return (
//        <>
//          <ul>
//            {mobilLength.map((mobile) => (
//              <li>{mobile}</li>
//            ))}
//          </ul>
//        </>
//      )
   
//    }
   
//    export default App
   
   
   
//    function App() {
   
//      const products = [
//        {id: 1, name: "laptop", available: true},
//        {id: 2, name: "phone", available: false},
//        {id: 3, name: "tablet", available: true},
//      ];
   
//      const availableProducts = products.filter(product => product.available)
   
   
//      return (
//        <>
//        <h2>Available Products</h2>
//        <ul>
//          { availableProducts.map(product => (
//            <li>{product.name}</li>
//          ))}
//        </ul>
       
//        </>
//      )
   
//    }
   
//    export default App