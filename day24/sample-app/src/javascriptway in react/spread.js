function App(){

    const person = {name: "ram", age: 100};
    const updatedPerson = {...person, name: "RAMA"}
    
    return (
      <>  
          {JSON.stringify(updatedPerson)}
      </>
    )
  
  }
  
  export default App