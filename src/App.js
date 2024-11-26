import React from "react";
import ReactDOM from "react-dom"
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className="appLayout">
            <HeaderComponent />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)