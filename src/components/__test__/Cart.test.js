import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import appStore from "../../utils/appStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import HeaderComponent from "../HeaderComponent"
import MENU_API from "../mocks/menuList.json"
import { act } from "react"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve(
        {
            json: () => {
                return Promise.resolve(MENU_API)
            }
        }
    )
})

it("Should load Restaurant Menu Cart Component", async () => {
    await act(async () =>
        render(<BrowserRouter>
            <Provider store={appStore}>
                <RestaurantMenu />
                <HeaderComponent />
                <Cart />
            </Provider>
        </BrowserRouter>

        )
    )
    const accodianHeader = screen.getByText("Recommended(20)")
    fireEvent.click(accodianHeader)
    const kfcItems = screen.getAllByTestId("restMenu").length;
    expect(kfcItems).toBe(20)
    const addBtns = screen.getAllByRole("button", { name: "Add +" })
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart(1)")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart(2)")).toBeInTheDocument();
    expect(screen.getAllByTestId("restMenu").length).toBe(22);
    fireEvent.click(screen.getByRole("button", { name: "Clear" }))
    expect(screen.getAllByTestId("restMenu").length).toBe(20);
    expect(screen.getByText("Cart is empty")).toBeInTheDocument()
})