function ChildComponent({message, value, isActive, items, user}) {

    return(
        <>
            Value from parent: <strong>{message}</strong> <br />
            Number from parent : <strong>{value}</strong>  <br />
            is active: <strong>{isActive ? "Active" : "Not Active"} </strong> <br />
            Mobile list: {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            <br />
            User data is:
            <div>
               Name is:  <h2>{user.name}</h2>
               City is: <h2>{user.city}</h2>
               Country is: <h2>{user.country}</h2>
            </div>

        </>
    )

}

export default ChildComponent