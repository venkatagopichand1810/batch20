
import ChildComponent from "./ChildComponent"

function App() {

    // function to handle the data from the child component
    const handleData = (data) => {
        alert(`Data from child: ${data}`)
    }

    return (
        <>
        <ChildComponent sendDataToParent = {handleData}/>
        </>
    )

}

export default App