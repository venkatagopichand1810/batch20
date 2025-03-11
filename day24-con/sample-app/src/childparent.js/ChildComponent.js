

function ChildComponent({sendDataToParent}) {

    const handleClick = () => {
        sendDataToParent("hello from the child component")
    }

    return(
        <>
        <h1>button is present in child component</h1>
          <button onClick = {handleClick}>Send Data to Parent</button>
        </>
    )

}

export default ChildComponent