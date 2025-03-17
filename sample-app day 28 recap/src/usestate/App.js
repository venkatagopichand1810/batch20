// state is used to maintain the state of the application we can use useState hook.
//hook is the special function which we can use in react for the specific reason 
//for ex..we can useState to maintain the state of the application based up on the user interaction.

import {useState} from "react";

function App(){
    const [count, setCount] = useState(0);

    
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    
    const reset = () => {
        setCount(0)
    }

    // managing the string input
    const[name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    // managing an object state
    const[user, setUser] = useState({
        name: "venkat",
        age: 22
    })

    // handler to update the object state
    const updatUser = () => {
        setUser({
            ...user,
            age: user.age + 1 //
        })
    }


    //managing the array state
    const[items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, `item ${items.length + 1}`])
    }

    return (
        <>
          <h1>Count value is: {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>

          {/* display the input state */}

          <div>
            <h2>Input State</h2>
            <input type = "text" value={name} onChange={handleNameChange} placeholder="Enter your name" />
            <p>Your name is: {name}</p>
          </div>

          {/* display object state */}
          <div>
            <h2> Object State</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={updatUser}>Increment Age</button>
          </div>

          {/* diplay the array state */}
          <div>
            <h2>Array State</h2>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        
        </>
    )

}

export default App