import { QueryClient } from "@tanstack/react-query"
import App from "./App"
import { render, screen, setupQueryClient } from "./test-utils"

describe("App", () => {
    let queryClient: QueryClient
    beforeEach(() => (queryClient = setupQueryClient()))

    it("renders properly", () => {
        render(<App />, { queryClient })
        const main = screen.getByRole("main")
        expect(main).toBeInTheDocument()
    })

    it("renders a theme example", () => {
        render(<App />, { queryClient })
        const themeExample = screen.getByTestId("theme example")
        expect(themeExample).toBeInTheDocument()
    })

    it("renders a router example", () => {
        render(<App />, { queryClient })
        const routerExample = screen.getByTestId("router example")
        expect(routerExample).toBeInTheDocument()
    })

    it("renders a query example", () => {
        render(<App />, { queryClient })
        const queryExample = screen.getByTestId("query example")
        expect(queryExample).toBeInTheDocument()
    })
})
