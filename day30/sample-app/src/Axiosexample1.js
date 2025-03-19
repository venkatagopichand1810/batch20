import {useEffect, useState} from "react";
import axios from "axios";
function App() {
  // state variable to store the api data
  const[data, setData] = useState([]);
  useEffect(() => {
    // we are going to get the data
    axios.get("https://jsonplaceholder.typicode.com/posts") //api calling
    .then((response) => { //parsing the JSON response
     setData(response.data)
  }) //setting the data into state
  }, [])

  return(
    <div>
      <h2>Users</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
          
        ))}
      </ul>
    </div>
  )

}

export default App