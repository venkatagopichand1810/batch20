function App() {
    const name = "Venkat";
    const country = "INDIA";
  
    const imgURL = "https://media.istockphoto.com/id/2151129875/photo/casual-teens-group-portrait.jpg?s=612x612&w=is&k=20&c=x3hd6PyaDvnzuyPUmwJSHHTETafzjM5YbAKh7B-NFmo="
    const altText = "some image";
  
    return (
      <>
        <h1>{name} is from {country}</h1>
        <img src = {imgURL} alt={altText} />
      </>
    )
  }
  
  export default App
  