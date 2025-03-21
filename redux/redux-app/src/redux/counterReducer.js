
// action types
const INCREMENT = "INCREMENT";
const DECREMENT = 'DECREMENT';

// Initial state for the counter

const initialState = {
    count: 0
}

// reducer function that handles actions and update the state

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:  //if the action is increment
            return {count: state.count + 1}
        
        case DECREMENT:
            return {count: state.count - 1}

        default:
            return state;
    }
}

export default counterReducer
