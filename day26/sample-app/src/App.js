import { useState, useEffect } from 'react';
import "./App.css"

function App() {
  // state is hold posts
  //state to hold the error
  //state to hold to loader
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //useEffect
  useEffect(() => {
    // define the asynchronous function

    const fetchPosts = async () => {

      try {
        setLoading(true);
        // fetch the data using fetch method

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // convert the response data to JSON format
        const data = await response.json();
        setPosts(data)

      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <div>Loading.........</div>

  if (error) return <div>Error.........</div>


  return (
    <div className='App'>
        <h1>Post Data</h1>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}

    </div>
  )



}

export default App