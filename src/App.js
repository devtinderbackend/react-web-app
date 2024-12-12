import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client"
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        //fetch API
        const data =
        {
            name: "Harikesh Yadav"
        }
        setUserName(data.name)
    }, [])
    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="appLayout">
                <HeaderComponent />
                <Outlet />
            </div>
        </UserContext.Provider>

    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />

            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>
            },

            {
                path: "/restaurant/:restId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
