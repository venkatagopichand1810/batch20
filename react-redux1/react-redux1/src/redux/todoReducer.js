
// actions types
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";


// initial state for the todo list

const initialState = {
    todos: []
}


// reducer function hanldes the state changes based on the action types

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {id: Date.now(), text: action.payload, completed: false}]
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload
                     ? {...todo, completed: !todo.completed}
                     : todo
                )
            }


        case DELETE_TODO:
            return {
                ...state, 
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
            

        default:
            return state;

    }
}

export default todoReducer