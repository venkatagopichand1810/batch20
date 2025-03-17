// muliple state how we can use useEffect

import { useEffect, useState } from "react"
function App() {
    const[data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const result = await response.json();
                setData(result)

            } catch(error){
                console.log("error fetching data")
            }
        }
        fetchData()
    }, [])

    return(
        <>
        <div>
            <h2>API response</h2>
            <ul>
                {data.slice(0,10).map((item) => (
                    <li>{item.title}</li>
                ))}
            </ul>
          
        </div>
        
        </>
    )

}

export default App