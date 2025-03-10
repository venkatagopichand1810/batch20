
function App() {

    let number = 100;
    let message;
  
    if(number > 10){
      message = "Greater than 10"
    } else if(number < 10){
      message = "less than 10"
    } else {
      message = "equal to 10"
    }
    return (
      <>
       {message}
      </>
    )
  
  }
  
  export default App
  
  
  
  