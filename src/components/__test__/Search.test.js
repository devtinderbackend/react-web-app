
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/restaurantListCards.json"
import Body from "../../components/Body"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve(
        {
            json: () => {
                return Promise.resolve(MOCK_DATA);
            }
        })
})

it("Should render body component with search", async () => {
    await act(async () =>

        render(<BrowserRouter>
            <Body />
        </BrowserRouter>
        )
    )
    const searchBtn = screen.getByRole("button", { name: "Search" })
    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput, { target: { value: "Pizza" } })
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("restCard");
    expect(cards.length).toBe(2);
})