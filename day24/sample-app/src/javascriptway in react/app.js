
function App() {

    const name = "venkat";
    const city = "bangalore";
  
    const greet = () => {
      return "welome to React"
    }
  
    const isLoggedIn = false;
    const isStudent = true;
  
    // if(isStudent) {
    //   return <p>Hello student learn MERN</p>
    // } else {
    //   return <p>Give training</p>
    // }
  
  
    return (
      <>
          <h1>Hello, {name}</h1>
          <p>wher are from ? is it {city}</p>
          <h1>{greet()}</h1>
          {isLoggedIn ? <p>Welcome back</p> : <p>Please login</p>}
          {/* condition ? "true" : "false" */}
  
      </>
    )
  
  
  
  }
  
  export default App