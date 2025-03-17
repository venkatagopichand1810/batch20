
function ChildComponent({sendMessage}) {

    const user = {
        name: "venkat",
        city: "chennai",
        country: "INDIA"
    }
    const sendUser = () => {
        sendMessage(user)
    }

    return(
        <button onClick = {sendUser}>Click</button>
    )

}

export default ChildComponent