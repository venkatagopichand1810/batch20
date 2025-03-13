//10******* imp 

// useEffect in react use fetching date from the api, updating the DOM, handling cleanups.

// useEffect(() => {

// }, [dependencies])


// import { useEffect, useState } from "react";

// function App(){
//   const[data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then(respone => respone.json())
//       .then(jsonData => setData(jsonData))

//   })

//   return (
//     <>
//     <div>
//       {data ? data.title : "loading...  "}
//     </div>
    
//     </>
//   )

// }

// export default App

import { useEffect, useState } from "react";
function App(){
  const[counter, setCounter] = useState(0);
  const[age, setAge] = useState(20);

  // useEffect(() => {
  //   // console.log(`counter: ${counter}, age: ${age}`)
  //   console.log(`counter: ${counter},,, Age: ${age}`)
  // }, [counter, age])

  // useEffect(() => {
  //   // console.log(`counter: ${counter}, age: ${age}`)
  //   console.log(`Age: ${age}`)
  // }, [age])

  useEffect(() => {
    if(counter > 5){
      alert(`counter ${counter}`)
    }
  }, [counter])
  return (
    <>
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment Count</button>

        <h1>Age: {age}</h1>
        <button onClick={() => setAge(age + 1)}>Age count</button>

      </div>
    </>
  )

}

export default App



