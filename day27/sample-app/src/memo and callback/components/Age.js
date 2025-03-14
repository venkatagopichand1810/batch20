import {memo} from 'react'
function Age({age}){
    console.log("4. Age ")

    return(
        <>
        <h1>The age is: {age}</h1>
        </>
    )

}

export default memo(Age)