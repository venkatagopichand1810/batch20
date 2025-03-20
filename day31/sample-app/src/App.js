// add the new person
// remove the person
// display the list of the people

import { useReducer } from "react";
import { peopleReducer, initialState } from "./reducers/peopleReducer";
import AddPersonForm from "./components/AddPersonForm";
import PeopleList from "./components/PeopleList";
import "./App.css"

function App() {
  // initialize the useReducer
  const[people, dispatch] = useReducer(peopleReducer, initialState);

  return(
    <div>
      <h1>People Management System</h1>
      {/* add the components */}
      <AddPersonForm dispatch = {dispatch}/>

      {/* display the list of people */}
      <PeopleList people = {people} dispatch = {dispatch}/>
    </div>
  )
  

}

export default App

