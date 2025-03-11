

function ChildComponent({onToggle}) {

    const handleClick = () => {
        onToggle(false)
    }

    return(
        <>
          <button onClick = {handleClick}>Turn Off</button>
        </>
    )

}

export default ChildComponent