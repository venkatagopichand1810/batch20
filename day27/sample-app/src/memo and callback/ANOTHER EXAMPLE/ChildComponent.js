
import React from "react"
const ChildComponent = React.memo(({handleClick}) => {
    console.log("child component rendered")

    return (
        <>
        <div>
            <h3>Child Component</h3>
            <button onClick={handleClick}>Click Me</button>
        </div>
        
        </>
    )

});

export default ChildComponent