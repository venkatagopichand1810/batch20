
import { useUser } from "../context/UserContext"

function Sidebar() {
    const {user} = useUser();
    return (
        <div style = {{backgroundColor: "orange", padding: '10px'}}>
            <h2>Sidebar</h2>
            <p>Role: {user.role}</p>
            <ul>
                <li>Dashboard</li>
                <li>Settings</li>
                <li>Profile</li>
            </ul>
        </div>
    )

}

export default Sidebar