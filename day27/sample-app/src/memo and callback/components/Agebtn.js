import {memo} from 'react'
function Agebtn({handleAge}) {
    console.log("5. Agebtn ")

    return (
        <>
        <button onClick={handleAge}>Increment Age</button>
        </>
    )

}

export default memo(Agebtn)