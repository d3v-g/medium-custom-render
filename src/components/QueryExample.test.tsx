import {
    clearQueryClient,
    render,
    screen,
    setupQueryClient,
    waitFor,
} from "../test_utils"
import QueryExample from "./QueryExample"

describe("Query example", () => {
    it("shows 0 fetch count initially", async () => {
        setupQueryClient()
        render(<QueryExample />)
        const header = screen.getByRole("heading", { level: 1 })
        await waitFor(() => expect(header).toHaveTextContent("Fetch count: 0"))
        clearQueryClient()
    })

    it("shows 1 fetch count when user clicks button to fetch data", async () => {
        setupQueryClient()
        const { user } = render(<QueryExample />)
        const button = screen.getByRole("button", { name: /fetch some data/i })
        await user.click(button)
        const header = screen.getByRole("heading", { level: 1 })
        expect(header).toHaveTextContent("Fetch count: 1")
        clearQueryClient()
    })

    it("shows 2 fetch count when user clicks button to fetch data twice", async () => {
        setupQueryClient()
        const { user } = render(<QueryExample />)
        const button = screen.getByRole("button", { name: /fetch some data/i })
        await user.click(button)
        await user.click(button)
        const header = screen.getByRole("heading", { level: 1 })
        expect(header).toHaveTextContent("Fetch count: 2")
        clearQueryClient()
    })
})
