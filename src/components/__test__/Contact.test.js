import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom';

describe("Test Contact Us Component", () => {
    test("Should load contact us component", () => {
        render(<Contact />)
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })

    test("Should 2 input boxes", () => {
        render(<Contact />)
        const inputBox = screen.getAllByRole("textbox")
        expect(inputBox.length).toBe(2)
    })
})

