// step 1
import { useReducer } from "react";
  // step2...Define the initial state
  const initialState = { count: 0 };
  // step3: create the reducer function 
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        // increment the count value
        return { count: state.count + 1 };

      case "DECREMENT":
        // increment the count value
        return { count: state.count - 1 };

      default:
        return state;
    }
  }

  function App() {
    // step: 4 use the useReducer to manage the complex state
    const[state, dispatch] = useReducer(reducer, initialState);

    return(
      <div>
        <h2>Counter</h2>
        <p>Count: {state.count}</p>
        <button onClick={() =>dispatch({type: "INCREMENT"})}>Increment</button>
        <button onClick={() =>dispatch({type: "DECREMENT"})}>Decrement</button>
      </div>
    )
}

export default App