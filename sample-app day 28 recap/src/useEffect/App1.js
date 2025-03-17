// useEffect ....api calls

// No dependecy array
//useEffect runs after every render

import{useEffect, useState} from "react";

function App() {
    // state
    const[count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1)
    // }

    // useEffectt without dependency -> Runs on every render

    useEffect(() => {
        console.log("component rendered")
    }, []); //when we add empty [] it is going to render only once

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )

}

export default App