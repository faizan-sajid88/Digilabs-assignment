import loginIcon from "../assets/images/icons/log-in.png"
import MainLogo from "../assets/images/logos/main-logo.svg"
import Hamburger from "./hamburger"

export default function NavBar(){

    return(
        <div>
            <div className="nav-bar">
                <div className="navbar-container">
                    <div className="nav-logo">
                        <img src={MainLogo} alt="Logo" />
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li>Card access</li>
                            <li>Banking</li>
                            <li>Processing</li>
                            <li>About</li>
                            <li>Carrer</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="login-div">
                        <div className="login-btn">
                           <p>Login</p>
                           <img src={loginIcon} alt="login-icon" />
                        </div>
                       <div className="menu-btn">
                       <Hamburger />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}