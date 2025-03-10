// handling events in react
function App() {

    const handleClick = () => {
      alert("button is clicked")
    }
    
      return (
        <>
         <button onClick = {handleClick}>Click me</button>
         <button onClick = {() => alert("button is clicked")}>Click me 1</button>
    
        </>
      )
    
    }
    
    export default App
    
    
    
    