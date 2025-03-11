
//1 way
function Child({name}){

    return(
        <>
                Name is {name}
        </>
    )

}

export default Child

//2nd way

function Child(props){

    return(
        <>
                Name is {props.name}
        </>
    )

}

export default Child


function Child({name = "rama", children}){

    return(
        <>
        Name is {name} and {children}
        </>
    )

}

export default Child