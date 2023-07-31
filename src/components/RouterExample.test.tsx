import { render, screen } from "../test-utils"
import RouterExample from "./RouterExample"

describe("Router example", () => {
    it("renders a link to the Home page", () => {
        render(<RouterExample />)
        const linkToHome = screen.getByRole("link", { name: /home/i })
        expect(linkToHome).toBeInTheDocument()
        expect(linkToHome).toHaveAttribute("href", "/")
    })

    it("renders a link to the About page", () => {
        render(<RouterExample />)
        const linkToAbout = screen.getByRole("link", { name: /about/i })
        expect(linkToAbout).toBeInTheDocument()
        expect(linkToAbout).toHaveAttribute("href", "/about")
    })

    it("renders a link to the Contact page", () => {
        render(<RouterExample />)
        const linkToContact = screen.getByRole("link", { name: /contact/i })
        expect(linkToContact).toBeInTheDocument()
        expect(linkToContact).toHaveAttribute("href", "/contact")
    })
})
