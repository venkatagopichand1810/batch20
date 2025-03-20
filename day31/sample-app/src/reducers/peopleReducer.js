// Define the initial state 
const initialState = [];

// create the reducer function 

const peopleReducer = (state, action) => {
    switch(action.type){
        case "ADD_PERSON" :
            // add the new person the an ID and NAME
         return [...state, {id: Date.now(), name: action.payload.name}]
        
        case "REMOVE_PERSON" :
            // remove the person
            return state.filter(person => person.id !== action.payload.id)

        default:
            return state
    }
}

export {peopleReducer, initialState};

// state -> current state of the list
// action.type -> type of the action being dispatched
// action.payload -> Data passed to the action




