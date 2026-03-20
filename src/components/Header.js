import { Link } from "react-router-dom";
import { LOGO_UR } from "../config/constants";
import { useEffect, useState } from "react";

// HEader Component
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("Header Rendered");

    // useEffect(() => {
    //     console.log("useEffect called");
    // }, []);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_UR} alt="A2Cafe Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About-us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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