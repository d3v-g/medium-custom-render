import { render, screen, setupQueryClient, waitFor } from "../test_utils"
import QueryExample from "./QueryExample"

describe("Query example", () => {
    it("shows 0 fetch count initially", async () => {
        const queryClient = setupQueryClient()
        render(<QueryExample />, { queryClient })
        await waitFor(() =>
            expect(screen.getByText("Fetch count: 0")).toBeInTheDocument(),
        )
    })

    it("shows 1 fetch count when user clicks button to fetch data", async () => {
        const queryClient = setupQueryClient()
        const { user } = render(<QueryExample />, { queryClient })
        const button = screen.getByRole("button", { name: /fetch some data/i })
        await user.click(button)
        const text = screen.getByText("Fetch count: 1")
        expect(text).toBeInTheDocument()
    })

    it("shows 2 fetch count when user clicks button to fetch data twice", async () => {
        const queryClient = setupQueryClient()
        const { user } = render(<QueryExample />, { queryClient })
        const button = screen.getByRole("button", { name: /fetch some data/i })
        await user.click(button)
        await user.click(button)
        const text = screen.getByText("Fetch count: 2")
        expect(text).toBeInTheDocument()
    })
})
