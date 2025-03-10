
function App() {
    let items = [];
    for(let i = 1; i<=5; i++){
      items.push(<li>{i}</li>)
    }
    
    return (
      <>
        <ul>{items}</ul>
      </>
    )
  
  }
  
  export default App
  
  
  
  