
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Students from "./components/Students"; 
import StudentDetail from "./components/StudentDetail";
import PageNotFound from "./components/PageNotFound";
import "./App.css"

function App(){

  return(
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/contact" element = {<Contact />} />
          <Route path = "/students" element = {<Students />} />
          <Route path = "/students/:id" element = {<StudentDetail />} />
          <Route path="**" element = {<PageNotFound />}  />
        </Routes>
      </div>

    </Router>
  )

}

export default App