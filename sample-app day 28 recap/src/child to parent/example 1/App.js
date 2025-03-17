import ChildComponent from "./ChildComponent"
function App(){

    const handleReceiveMessage = (message) => {
        alert(`Received: ${message}`)
    }


    return(
        <div>
            <ChildComponent sendMessage = {handleReceiveMessage}/>
        </div>
    )

}

export default App