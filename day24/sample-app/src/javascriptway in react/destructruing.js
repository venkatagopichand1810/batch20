function App(){

    // object
    const person = {
      name : "venkat",
      age: 31, 
      city: "Chennai"
    }
    //object destructruing
    const {name, age, city} = person; 
  
    //array
    const mobiles = ["OPPO", "VIVO", "LG"]
    //array destructruing
    const[one, two, three] = mobiles
  
    return (
      <>  
          <p>Name is: {name}</p>
          <p>Age is: {age}</p>
          <p>City is: {city}</p>
  
          <h1>Mobiles are: </h1>
          {one}<br/>
          {two}<br/>
          {three}<br/>
      </>
    )
  
  }
  
  export default App