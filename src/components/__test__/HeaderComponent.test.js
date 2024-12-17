import HeaderComponent from "../HeaderComponent"
import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
// import Cart from "../Cart"

describe("Test Contact Us Component", () => {
    it("should render Header Component with Login Button", () => {

        render(
            <BrowserRouter><Provider store={appStore}>

            <HeaderComponent />
        </Provider></BrowserRouter>

        );
        const loginButton  = screen.getByRole("button")
        expect(loginButton).toBeInTheDocument()
    })


    it("should render Header Component with Login Button", () => {

        render(
            <BrowserRouter><Provider store={appStore}>

            <HeaderComponent />
        </Provider></BrowserRouter>

        );
        const loginButton  = screen.getByText("Login")
        expect(loginButton).toBeInTheDocument();
    })

    it("should render Header Component with Login Button", () => {

        render(
            <BrowserRouter><Provider store={appStore}>

            <HeaderComponent />
        </Provider></BrowserRouter>

        );
        const loginButton  = screen.getByRole("button",{name:"Logiin"})
        expect(loginButton).toBeInTheDocument();
    })

    it("should rende Header Component with Cart", () => {

        render(
            <BrowserRouter><Provider store={appStore}>

            <HeaderComponent />
        </Provider></BrowserRouter>

        );
        const cartItems  = screen.getByText(/Cart/)
        expect(cartItems).toBeInTheDocument();
    })

    it("should be login Button to logout on click", () => {

        render(
            <BrowserRouter><Provider store={appStore}>

            <HeaderComponent />
        </Provider></BrowserRouter>

        );
        const loginButton  = screen.getByRole("button", {name:"Login"})
        fireEvent.click(loginButton)
        const logoutButton = screen.getByRole("button",{name:"Logout"})
        expect(logoutButton).toBeInTheDocument();
    })
})
