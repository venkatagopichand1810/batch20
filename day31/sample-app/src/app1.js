
import {useState} from "react";

function App() {

  // state variable
  const[count, setCount] = useState(0);

  // function to increase the value
  
  const increment = () =>{
    setCount(count + 1);
  }


  //function to decrease the value
  const decrement = () =>{
    setCount(count - 1);
  }

  return(
    <>
    <div>
      <h2>Counter Example</h2>
      <p>{count}</p>
      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>
    </div>
    </>
  )

}

export default App