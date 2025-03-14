import { useRef } from "react"
function App() {
    const emailRef = useRef();
    const passwordRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        // get the values directly from refs
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log("Logging in with", {email, password})

        if(email === "venkat@gmail.com" && password === "welcome123"){
            alert("login successful")
        } else (
            alert("invalid email or password")
        )

    }

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="email" ref={emailRef} />
                    </div>
                    
                    <div>
                        <label>Password:</label>
                        <input type="password" ref={passwordRef} />
                    </div>

                    <button type="submit">Submit</button>
                </form>

            </>
        )
    }

    export default App