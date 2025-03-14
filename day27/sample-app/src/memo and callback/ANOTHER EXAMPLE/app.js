
import {useState, useCallback} from "react";
import ChildComponent from "./components/ChildComponent";

function App() {

  const[count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("button is clicked")
  }, [])

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent />
    </div>
  )

}

export default App