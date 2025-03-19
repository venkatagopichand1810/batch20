import {useEffect, useState} from "react";

function App() {
  // state variable to store the api data
  const[data, setData] = useState([]);
  useEffect(() => {
    // we are going to get the data
    fetch("https://jsonplaceholder.typicode.com/users") //api calling
    .then((response) => response.json()) //parsing the JSON response
    .then((data) => setData(data)) //setting the data into state
    .catch((error) => console.error("error fetching the data"))
  }, [])

  return(
    <div>
      <h2>Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}, {user.username} {user.email}</li>
          
        ))}
      </ul>
    </div>
  )

}

export default App