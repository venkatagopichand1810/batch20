import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { UserProvider } from "./context/UserContext";


function App() {


  return(
    <UserProvider>
      
      <Navbar />
      <Sidebar  />
      <MainContent />
      
    </UserProvider>
  )

}

export default App