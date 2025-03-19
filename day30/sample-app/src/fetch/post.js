import { useEffect, useState } from "react";

function App() {
  // state variable to store the api data
  const [title, setTitle] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body: "venkat posted new comment",
      userId: 1,
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST', //HTTP POST METHOD
        headers: {
          'Content-Type': "applicaton/json"
        },
        body: JSON.stringify(newPost)
      });
      const data = await response.json()
      console.log('Created the user', data)

    } catch (error) {
      console.error("Error creating post", error)
    }

  }

  return (
    <div>
       <h1 className="text-center text-green-900 font-bold text-4xl "  >Hello World</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          className="border"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
        />
        <button type="submit" >Create Post</button>
      </form>
    </div>
  )

}

export default App