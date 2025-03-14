import {useState, useCallback} from "react";
import Title from "./components/Title";
import Age from "./components/Age";
import Agebtn from "./components/Agebtn";
import Count from "./components/Count";
import CountBtn from "./components/Countbtn";

function App() {
  let[count, setCount] = useState(0);
  let[age, setAge] = useState(18);

  const handleCount = useCallback(() => {
    setCount(count + 1)
  }, [count])
  
  const handleAge =  useCallback(() => {
    setAge(age + 1)
  }, [age])

  return(
    <>
    <Title />
    <Count count = {count}/>
    <CountBtn handleCount = {handleCount}/>
    <Age age = {age}/>
    <Agebtn handleAge = {handleAge}/>
    
    </>
  )

}

export default App