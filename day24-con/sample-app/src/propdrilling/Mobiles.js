import Checkout from "./Checkout"
function Mobiles({user}) {

    return (
        <>
        <h1>Mobiles Page</h1>
            username is :{user}
            <Checkout user = {user} />
        </>
    )

}

export default Mobiles