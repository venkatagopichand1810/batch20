
function ChildComponent({sendMessage}) {
    const sendData = () => {
        sendMessage("hello i am from child")
    }

    return(
        <button onClick = {sendData}>Click</button>
    )

}

export default ChildComponent