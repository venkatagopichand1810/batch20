// key prop...5 star interview 

// keys are the special string attributes we need to include when creating the lists of elements.
//keys help react to identify which items have changed, added or removed


function App() {

    const items = [
      {id: 1, name: "LG"},
      {id: 2, name: "OPPO"},
      {id: 3, name: "VIVO"},
    ]
  
    return (
      <ul>
        {items.map(item => (
          <li key = {item.id}>{item.name}</li>
        ))}
  
      </ul>
    )
  
  }
  
  export default App