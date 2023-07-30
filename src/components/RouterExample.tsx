import { Link } from "react-router-dom"

const RouterExample: React.FC = () => {
    return (
        <section
            className="flex justify-center gap-5 text-white"
            data-testid="router example"
        >
            <Link
                to="/"
                className="w-20 rounded-lg border bg-lime-900 py-2 shadow-lg dark:bg-green-900"
            >
                Home
            </Link>
            <Link
                to="about"
                className="w-20 rounded-lg border bg-lime-900 py-2 shadow-lg dark:bg-green-900"
            >
                About
            </Link>
            <Link
                to="contact"
                className="w-20 rounded-lg border bg-lime-900 py-2 shadow-lg dark:bg-green-900"
            >
                Contact
            </Link>
        </section>
    )
}

export default RouterExample
