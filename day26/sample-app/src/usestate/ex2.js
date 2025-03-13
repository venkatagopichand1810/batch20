import {useState} from "react";
// counter
function App()  {

  const[mobiles, setMobiles] = useState(['LG', "SUMSUNG", "OPPO"]);

  const addMobile = () => {
    setMobiles(prevMobiles => [...prevMobiles, "IPHONE"])
  }
 
  return (
    <>
       <ul>
          {mobiles.map((mobile) => (
            <li>{mobile}</li>
          ))}
       </ul>
      <button onClick = {addMobile}>Add Mobile</button>
    
    </>
  )

}

export default App


// is it possible to change value in prop...no..prop immutable we cant change the value