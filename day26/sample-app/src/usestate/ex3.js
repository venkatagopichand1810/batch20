import {useState} from "react";
// counter
function App()  {

  const[isOn, setIsOn] = useState(false);

  const toggle = () => {
    // setIsOn(!isOn); //true
    setIsOn(prevState => !prevState)
  }
 
  return (
    <>
       <p>Status: {isOn ? "ON" : "OFF"}</p>
       <button onClick={toggle}>
          {isOn ? "TURN OFF" : "TURN ON"}
       </button>
    
    </>
  )

}

export default App


// is it possible to change value in prop...no..prop immutable we cant change the value