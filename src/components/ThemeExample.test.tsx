import { render, screen } from "../test_utils"
import { Theme } from "../ThemeContext"
import ThemeExample from "./ThemeExample"

describe("Theme example", () => {
    test("heading element displays dark mode is off in light theme", () => {
        render(<ThemeExample />, {
            theme: { theme: Theme.LIGHT, setTheme: vi.fn() },
        })
        const heading = screen.getByRole("heading", { level: 1 })
        expect(heading).toHaveTextContent("Dark mode: Off")
    })
    test("heading element displays dark mode is on in dark theme", () => {
        render(<ThemeExample />, {
            theme: { theme: Theme.DARK, setTheme: vi.fn() },
        })
        const heading = screen.getByRole("heading", { level: 1 })
        expect(heading).toHaveTextContent("Dark mode: On")
    })
    it("calls setTheme() when change theme button is clicked", async () => {
        const spy = vi.fn()
        const { user } = render(<ThemeExample />, {
            theme: { theme: Theme.LIGHT, setTheme: spy },
        })
        const button = screen.getByRole("button", { name: "Change Theme" })
        await user.click(button)
        expect(spy).toHaveBeenCalled()
    })
    it("calls setTheme() with the LIGHT enum when change theme button is clicked in dark mode", async () => {
        const spy = vi.fn()
        const { user } = render(<ThemeExample />, {
            theme: { theme: Theme.DARK, setTheme: spy },
        })
        const button = screen.getByRole("button", { name: "Change Theme" })
        await user.click(button)
        expect(spy).toHaveBeenCalledWith(Theme.LIGHT)
    })
    it("calls setTheme() with the DARK enum when change theme button is clicked in light mode", async () => {
        const spy = vi.fn()
        const { user } = render(<ThemeExample />, {
            theme: { theme: Theme.LIGHT, setTheme: spy },
        })
        const button = screen.getByRole("button", { name: "Change Theme" })
        await user.click(button)
        expect(spy).toHaveBeenCalledWith(Theme.DARK)
    })
})
