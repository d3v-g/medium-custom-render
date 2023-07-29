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
})
