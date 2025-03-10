import logo from "../assets/images/adidas.png";

function Header() {

    return (
        <>
          <header>
            <img src = {logo} alt = "LOGO" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
          </header>
        </>
    )

}

export default Header