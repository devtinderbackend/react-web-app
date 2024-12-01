import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
    const [reactBtnName, setReactBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status:{onlineStatus ? "✅" : "🛑"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        Cart
                    </li>
                    <button className="btn-name" onClick={() =>
                        reactBtnName === "Login" ? setReactBtnName("Logout") : setReactBtnName("Login")
                    }>{reactBtnName}</button>
                </ul>

            </div>
        </div>
    )
}

export default HeaderComponent;