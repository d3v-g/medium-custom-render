import { MemoryRouter } from "react-router-dom"
import App from "./App"
import { render, screen } from "@testing-library/react"

describe("app", () => {
    it("renders properly", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />,
            </MemoryRouter>,
        )

        const main = screen.getByRole("main")
        expect(main).toBeInTheDocument()
    })
})
