// function App(){
// const isLoggedIn = true;
// const user = "";
 
  
//   return (
//     <>  
//        {isLoggedIn && <p>Welcome to the dashboard to {user}</p>}
//        <p>{user || "guest"}</p>
//     </>
//   )

// }

// export default App



function App() {
    const greet = (name) => `hello, ${name}`
  
    return <p>{greet("Rama")}
      </p>
  
  }
  
  export default App