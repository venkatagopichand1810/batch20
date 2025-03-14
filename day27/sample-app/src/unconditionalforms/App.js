import { useRef } from "react"

function App(){
    const nameRef = useRef(); //create a ref to stroe the input value
    const emailRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name :", nameRef.current.value);
        console.log("Email :", emailRef.current.value);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" ref={nameRef}/>
            </div>

            <div>
                <label>Email:</label>
                <input type="email" ref={emailRef}/>
            </div>
            <button type="submit">Submit</button>
        </form>
        
        </>
    )
}

export default App