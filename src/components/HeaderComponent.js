import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const [reactBtnName, setReactBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser}= useContext(UserContext)
    const cartItems = useSelector((state)=>state?.cart.items);
    // console.log(cartItems)

    return (
        <div className="flex justify-between shadow-lg m-2 mb-5">
            <div className="logo-container">
                <img className="max-w-56" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="px-4">
                        Online Status:{onlineStatus ? "✅" : "🛑"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 text-lg font-bold">
                    <Link to="/cart"> Cart({cartItems.length})</Link>

                    </li>
                    <button className="btn-name" onClick={() =>
                        reactBtnName === "Login" ? setReactBtnName("Logout") : setReactBtnName("Login")
                    }>{reactBtnName}</button>
                     <li className="px-4 font-bold">
                        {loggedInUser}
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default HeaderComponent;