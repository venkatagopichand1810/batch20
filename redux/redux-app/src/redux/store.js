// import createStore to create the redux store
import {createStore} from "redux";

// import the counter reducer
import counterReducer from "./counterReducer";

// create the redux store and we are going pass the reducer
const store = createStore(counterReducer);

export default store