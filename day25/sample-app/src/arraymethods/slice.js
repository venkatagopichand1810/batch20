// slice method is used to create the shallow copy of an array or extract the protion of an array....modify the original array


function App() {

    let mobiles = ["LG", "OPPO", "VIVO", "Samsung", "IPHONE", "LG", "OPPO", "VIVO",];
  
    const copyArray = () => {
      // const newMobiles = mobiles.slice();
      // const newMobiles = mobiles.slice(1, 3);
      // const newMobiles = mobiles.slice(3);
      const newMobiles = mobiles.slice(1);
      console.log(newMobiles)
    }
  
    return (
      <>
        <button onClick = {copyArray}>Copy Array</button>
      </>
    )
  
  }
  
  export default App
  
  // start inclusive
  // end exclusive
  
  
  
  
  