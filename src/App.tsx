import { useContext } from "react"
import { ThemeContext, Theme } from "./ThemeContext"
import { Link, Outlet } from "react-router-dom"

const App: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <main className="flex h-screen flex-col justify-center bg-gray-50 text-center font-semibold dark:bg-slate-900">
                <div className="flex items-center justify-center gap-5 text-sky-900 dark:text-slate-200">
                    <h1>Dark mode: {theme === Theme.DARK ? "on" : "off"}</h1>
                    <button
                        className="w-32 rounded-xl border bg-slate-700 py-2 font-light text-white shadow-lg dark:bg-slate-700"
                        onClick={() =>
                            setTheme(
                                theme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
                            )
                        }
                    >
                        Change Theme
                    </button>
                </div>
                <div className="mt-8 text-lime-800 dark:text-lime-200">
                    <Outlet />
                    <div className="mt-4 flex justify-center gap-5 text-white">
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
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
