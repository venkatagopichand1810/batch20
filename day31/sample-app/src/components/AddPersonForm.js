
import { useState } from "react";
function AddPersonForm({dispatch}) {
    // state variable for the user name
    const[name, setName] = useState('');
    // handle submit form 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name) {
            alert("name is needed")
        }
        // dispatch the action to add the new person
        dispatch({type: "ADD_PERSON", payload: {name}})

        setName('');
    }


    return(
        <form onSubmit={handleSubmit}>
            <input 
                type = "text"
                placeholder="Enter the name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type = "submit">Add Person</button>
        </form>
    )

}

export default AddPersonForm