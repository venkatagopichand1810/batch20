import {useState} from "react";
function App()  {
  const[count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 200)
  }
  return (
    <>
        <h1>Count is {count}</h1>

      <button onClick = {increment}>increment</button>

    
    </>
  )

}
export default App
