import KidsWear from "./KidsWear"
function Accessories({user}) {

    return (
        <>
        <h1>Accessories Page</h1>
            username is :{user}
            <KidsWear user = {user} />
        </>
    )

}

export default Accessories