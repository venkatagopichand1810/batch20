import { useUser } from "../context/UserContext";

function LevelFive() {
    // use context to access the user data 
    const user = useUser();

    return(
        <div>
            <h1>Level Five</h1>
            User data is: <br />
            {user.username} <br />
            {user.password}
        </div>
    )

}
export default LevelFive