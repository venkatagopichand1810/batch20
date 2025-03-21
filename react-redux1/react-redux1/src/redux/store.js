import {createStore} from "redux";
import todoReducer from "./todoReducer";

// create the redux store using the todoreducer

const store = createStore(todoReducer);

export default store;