function App() {
    const isStudent = false;
  
    // const welcome = () => {
    //   return "Hello, sir"
    // }
  
    return (
      <>
        {/* {isStudent ? <h1>Please complete the assignemnt</h1> : <p>hello sir</p>} */}
  
        {isStudent && <p>Please complete the assignemnt</p>}
  
      </>
    )
  }
  
  export default App
  