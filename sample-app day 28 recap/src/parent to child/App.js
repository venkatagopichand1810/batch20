
import './App.css';
import ChildComponent from './components/ChildComponent';

function App() {
  const mobiles = ["LG", "OPPO", "VIVO"];
  const user = {
    name: "venkat",
    city: "Bangalore",
    country: "india"
  }

  return (
    <div className="App">
      <ChildComponent message = "hello from the parent" value = {25} isActive = {true} items = {mobiles} user = {user}/>
    </div>
  );
}

export default App;

// passing the string as a prop to child component