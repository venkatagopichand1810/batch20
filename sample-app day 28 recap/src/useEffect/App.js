// muliple state how we can use useEffect

import { useEffect, useState } from "react"


function App() {
    const[count, setCount] = useState(0);
    const[name, setName] = useState("")

    // useEffect(() => {
    //     console.log("count")
    // }, [count])

    // useEffect(() => {
    //     console.log("name")
    // }, [name])

        useEffect(() => {
        console.log("count")
    }, [count,name])


    return(
        <>
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br />
            <input 
                type = "text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Name: {name}</p>
        </div>
        
        </>
    )

}

export default App