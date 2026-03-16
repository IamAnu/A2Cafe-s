import { LOGO_UR } from "../config/constants";
import { useState } from "react";

// HEader Component
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_UR} alt="A2Cafe Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login"
                        onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
                    > {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;