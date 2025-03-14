import { useState } from "react"
function App() {
    // const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setError("Invalid email address example abc@gamil.com")
            return;
        }
    }

        return (
            <>
                <form onSubmit={handleSubmit}>
                    {/* <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={handleChange} />
                    </div> */}

                    <div>
                        <label>Email:</label>
                        <input type="text" value={email} onChange={handleChange} />
                    </div>
                    {error && <p style={{color: "red"}}>{error}</p>}

                    <button type="submit">Submit</button>
                </form>

            </>
        )
    }

    export default App