

import {Link, Outlet} from 'react-router-dom';


function KidsWear() {

    return (
        <div>
            <h1>KidsWear</h1>
            <nav>
                <Link to = "boyBabyWear">BoyBabyWear</Link>
                <Link to = "girlBabyWear">GirlBabyWear</Link>
                <Link to = "toys">Toys</Link>
            </nav>

            <Outlet />
            {/* we are goingt to use outlet to display the nested routes */}
        </div>
    )

}

export default KidsWear