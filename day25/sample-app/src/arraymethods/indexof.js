// indexOF returns the first occurrence of the element

// if the element is not found then it will returns -1

// find the index of an element in an array


// function App() {
//   const mobiles = ["OPPO", "VIVO", "SAMSUNG", "OPPO", "VIVO", "SAMSUNG"]

//   const findIndex = () => {
//     const index = mobiles.indexOf("OPPO");
//     console.log("index of vivo", index)
//   }

//   return (
//     <>
//       <button onClick = {findIndex}>Find Index</button>
//     </>
//   )

// }

// export default App




// function App() {
//  const users = [
//   {id: 1, name: "Venkat"},
//   {id: 2, name: "rama"},
//   {id: 3, name: "jack"},
//   {id: 4, name: "john"},

//  ]
//   const findIndex = () => {
//     const index = users.findIndex(user => user.name === "john");
//     console.log("index of venkat", index)
//   }

//   return (
//     <>
//       <button onClick = {findIndex}>Find Index</button>
//     </>
//   )

// }

// export default App


// indexOf with Strings

function App() {

    const handleSearch = () => {
      const text = "hello, welcome to react";
      const index = text.indexOf("welcome");
      console.log(index)
    }
  
  
    return (
      <>
        <button onClick = {handleSearch}>Find</button>
      </>
    )
  
  }
  
  export default App
  
  
  