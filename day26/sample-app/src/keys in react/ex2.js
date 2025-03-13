import {useState} from "react"
function App() {
  const[items, setItems] = useState([
    {id: 1, name: "LG"},
    {id: 2, name: "OPPO"},
    {id: 3, name: "VIVO"},
  ]);

  //function to add the new item
  const addItem = () => {
    const newItem = {id: items.length + 1, name: "Iphone"};
    setItems([...items, newItem])
  }

  const removItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }
  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map(item => (
            <li key = {item.id}>
              {item.name}
              <button onClick={() => removItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App