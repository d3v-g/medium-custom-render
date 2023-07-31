import { render, screen } from "../test-utils"
import StyledNavLink from "./StyledNavLink"

describe("Styled navlink", () => {
    it("renders a link to the passed in path", () => {
        const path = "/test-path"
        const label = "Test label"
        render(<StyledNavLink path={path} label={label} />)
        const link = screen.getByRole("link")
        expect(link).toHaveAttribute("href", path)
    })
    it("renders the passed in label", () => {
        const path = "/test-path"
        const label = "Test label"
        render(<StyledNavLink path={path} label={label} />)
        const link = screen.getByRole("link")
        expect(link).toHaveTextContent(label)
    })

    it("renders active styles correctly", () => {
        const initialEntries = ["/test-path"]
        const path = "/test-path"
        const label = "Test label"
        const { container } = render(
            <StyledNavLink path={path} label={label} />,
            { initialEntries },
        )
        expect(container).toMatchSnapshot()
    })

    it("renders inactive styles correctly", () => {
        const initialEntries = ["/test-path"]
        const path = "/some-other-path"
        const label = "Test label"
        const { container } = render(
            <StyledNavLink path={path} label={label} />,
            { initialEntries },
        )
        expect(container).toMatchSnapshot()
    })
})
