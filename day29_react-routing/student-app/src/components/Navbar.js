import { Link } from "react-router-dom"

function Navbar() {

    return (
        <nav className="navbar">
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/students">Students</Link>


        </nav>
    )

}

export default Navbar