import App from "./App"
import {
    clearQueryClient,
    render,
    screen,
    setupQueryClient,
} from "./test_utils"

describe("app", () => {
    beforeAll(() => setupQueryClient())
    afterAll(() => clearQueryClient())

    it("renders properly", () => {
        render(<App />)
        const main = screen.getByRole("main")
        expect(main).toBeInTheDocument()
    })

    it("renders a theme example", () => {
        render(<App />)
        const themeExample = screen.getByTestId("theme example")
        expect(themeExample).toBeInTheDocument()
    })

    it("renders a router example", () => {
        render(<App />)
        const routerExample = screen.getByTestId("router example")
        expect(routerExample).toBeInTheDocument()
    })

    it("renders a query example", () => {
        render(<App />)
        const queryExample = screen.getByTestId("query example")
        expect(queryExample).toBeInTheDocument()
    })
})
