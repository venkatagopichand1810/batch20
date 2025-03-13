import {useState} from "react";
// counter
function App()  {
  // we need to create the state variable
  //here count is the current state variable
  //setCount..setter method to update the variable 
  //0 ..initial value
  const[count, setCount] = useState(1000);
  const[name, setName] = useState("Rama");
  const[age, setAge] = useState(25);
  const increment = () => {
    setCount(count + 200)
  }
  const changeName = () => {
    setName("shiva")
  }
  const ChangeAge = () => {
    setAge(age + 4)
  }
  return (
    <>
        <h1>Count is {count}</h1>
        <h1>Name is {name}</h1>
        <h1>Age is {age}</h1>
      <button onClick = {increment}>increment</button>
      <button onClick = {changeName}>Change Name</button>
      <button onClick = {ChangeAge}>Change Age</button>
    
    </>
  )

}

export default App


// is it possible to change value in prop...no..prop immutable we cant change the value