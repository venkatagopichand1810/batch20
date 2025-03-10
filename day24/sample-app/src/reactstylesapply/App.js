import "./App.css"

function App() {
  // internal css style, we can create as an object
  const buttonStyle = {
    color: "orange",
    padding: "10px 20px",
    margin: "20px",
    cursor: "pointer",
    borderRadius: "10px",
    backgroundColor: "black"
  }

  return (
    <>
      <button style = {buttonStyle}>Click Me</button>
      <button id = "buttonStyle">Submit</button>
      <button className = "buttonStyle1">Submit</button>
      <button style = {{color: "orange", backgroundColor: "black"}}>Submit</button>
    </>
  )
}

export default App


// different ways to apply styles in react
//inline, internal and external

