
function PeopleList({people, dispatch}){

    return(
        <ul>
            {people.map((person) => (
                <li key={person.id}>
                    {person.name}
                    <button onClick={() => dispatch({type: "REMOVE_PERSON", payload: {id: person.id}})}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    )

}

export default PeopleList