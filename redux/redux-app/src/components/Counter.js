import { increment, decrement } from "../redux/counterActions";
import { useSelector, useDispatch} from "react-redux"


function Counter() {
    // useSelector access the state from the redux store
    const count = useSelector((state) => state.count)

    // useDispatch dispatches actions to the redux store
    const dispatch = useDispatch();



    return(
        <div>
            <h1>Counter App</h1>
            <h2>Count value is: {count}</h2>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    )
}

export default Counter