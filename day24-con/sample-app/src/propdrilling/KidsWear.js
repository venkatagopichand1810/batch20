import Menswear from "./Menswear"
function KidsWear({user}) {

    return (
        <>
        <h1>KidsWear Page</h1>
        username is :{user}
        <Menswear user = {user} />
        
        </>
    )

}

export default KidsWear