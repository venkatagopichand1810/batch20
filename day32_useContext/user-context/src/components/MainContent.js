import { useUser } from "../context/UserContext"
function MainContent() {
    const {user} = useUser();
    return(
        <div style = {{backgroundColor: "green", padding: '10px'}}>
            <h2>Main Content</h2>
            <p>Welcome, {user.username}</p>
            <p>Email, {user.email}</p>
        </div>
    )

}

export default MainContent