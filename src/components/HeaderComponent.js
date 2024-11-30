import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"

const HeaderComponent = () => {
    const [reactBtnName, setReactBtnName]  = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
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
                        Cart
                    </li>
                    <button className="btn-name" onClick={()=>
                   reactBtnName==="Login"?setReactBtnName("Logout"):setReactBtnName("Login")
                    }>{reactBtnName}</button>
                </ul>

            </div>
        </div>
    )
}

export default HeaderComponent;