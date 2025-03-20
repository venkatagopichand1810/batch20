
import { useUser } from "../context/UserContext"
function Navbar() {
    const {user, logout} = useUser()
    return (
        <div style = {{backgroundColor: "#ccc", padding: "10px"}}>
            <h2>Navbar</h2>
            {user.isLoggedIn ? (
                <p> Welcome, {user.username} | 
                <button onClick={logout}>Logout</button></p>
            ): (
                <p>Please login </p>
            )}
        </div>
    )

}

export default Navbar