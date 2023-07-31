import StyledNavLink from "../components/StyledNavLink"

const RouterExample: React.FC = () => {
    return (
        <section
            className="flex justify-center gap-5 text-white"
            data-testid="router example"
        >
            <StyledNavLink path="/" label="Home" />
            <StyledNavLink path="/about" label="About" />
            <StyledNavLink path="/contact" label="Contact" />
        </section>
    )
}

export default RouterExample
