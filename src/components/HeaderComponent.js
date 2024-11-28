import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

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
                        Home
                    </li>
                    <li>
                        About us
                    </li>
                    <li>
                        Contact us
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