import ChildComponent from "./ChildComponent"
function App(){

    const handleReceiveMessage = (user) => {
        alert(`Name: ${user.name}, City: ${user.city}, Country: ${user.country}`)
    }


    return(
        <div>
            <ChildComponent sendMessage = {handleReceiveMessage}/>
        </div>
    )

}

export default App