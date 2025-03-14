import {memo} from 'react'
function Title(){
    console.log("1. Title ")

    return (
        <>
            <p>Shopping Application</p>
        </>
    )

}

export default memo(Title)

// when we we use memo only the componetn where the props updatting componnets