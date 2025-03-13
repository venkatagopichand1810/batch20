// splice method is used to add, remove and replace element in an array directly by modifiying the original array


// slice method is used to create the shallow copy of an array or extract the protion of an array....modify the original array


function App() {

  let mobiles = ["a", "b", "c", "d", "e", "f", "g", "h",];

  const spliceEx = () => {
    const newMobiles = [...mobiles]; //copy of oriignal array
    newMobiles.splice(1, 3, "new item1", "new item2")
    console.log(newMobiles)
  }

  return (
    <>
      <button onClick = {spliceEx}>splice</button>
    </>
  )

}

export default App

// start inclusive
// end exclusive




