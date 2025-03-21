import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../redux/totoActions";



function TodoList () {
    // state variables
    const[text, setText] = useState('');
    const todos = useSelector((state => state.todos))
    const dispatch = useDispatch()

    const handleAddTodo = () => {
        if(text){
            dispatch(addTodo(text));
            setText('')
        }

    }



    return(
     <div className="todo-container">
        <h1>Todo List</h1>
        <div className="todo-input">
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add the new todo"
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
        
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}> 
                    <span
                        onClick={() => dispatch(toggleTodo(todo.id))}
                        style={{textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer"}}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </li>
            ))}
        </ul>

     </div>

    )

}



export default TodoList