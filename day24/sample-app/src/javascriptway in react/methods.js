
function App() {

    const squreRoot = Math.sqrt(16);
    const text = "Javascript in react";
    const uppercase = text.toUpperCase();
    const lowerCase = text.toLowerCase();
    const today = new Date();
    const date = today.toDateString();
    const year = today.getFullYear()
    const mobiles = ["b", "c", "a", "d"];
    const joinMobiles = mobiles.join("*****")
    const sortMobiles = mobiles.sort();
    const reverseMobiles = mobiles.reverse();
  
    const name = "venkat";
    const city = "chennai"
    const message = `My name is ${name} and i am from ${city}`
  
  
  
    return (
      <>
       <p>Squre root of 16 is {squreRoot}</p>
       <h1>{Math.PI}</h1>
        <h2>{uppercase} </h2>
        <h2>{lowerCase} </h2>
        <h2>{date}</h2>
        <h2>{year}</h2>
        <h2>{joinMobiles}</h2>
        <h2>{sortMobiles.join(", ")}</h2>
        <h2>{reverseMobiles.join(", ")}</h2>
        <h2>{message}</h2>
  
      </>
    )
  
  }
  
  export default App
  
  
  
  