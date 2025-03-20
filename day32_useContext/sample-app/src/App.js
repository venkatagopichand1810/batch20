import LevelOne from "./components/LevelOne";
import { UserProvider } from "./context/UserContext";

function App() {

  // user data to be passed down


  return (
    <UserProvider>
      <div>
        <h1>App Component</h1>
        <LevelOne />
      </div>
    </UserProvider>

  )

}

export default App