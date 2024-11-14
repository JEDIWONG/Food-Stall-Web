import "../styles/header.css"
import logo from "../assets/images/logo.jpg";

function Header(){
    return(
        <>
            <header className="header-container">

                <img src={logo} className="logo"></img>
                <ul className="nav-container">
                    <li>
                        Home
                    </li>
                    <li>
                        Order
                    </li>
                    <li>
                        Cart
                    </li>
                    <li>
                        More
                    </li>
                    <li>
                        Account
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;