
import ChildComponent from "./ChildComponent"

function App() {

    // function to handle the data from the child component
    const handleToggle = (isOn) => {
       alert(`Switch is ${isOn ? "ON" : "OFF"}`);
    }

    return (
        <>
        <ChildComponent onToggle = {handleToggle}/>
        </>
    )

}

export default App