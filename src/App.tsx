import { useContext, useState } from "react"
import { ThemeContext, Theme } from "./ThemeContext"
import { Link, Outlet } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

const App: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const [fetchCount, setFetchCount] = useState(0)

    const query = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            setFetchCount((prevCount) => prevCount + 1)
            return Promise.resolve(fetchCount)
        },
    })

    return (
        <>
            <main className="flex h-screen flex-col justify-center gap-8 bg-gray-50 text-center font-semibold dark:bg-slate-900">
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

                <div className="text-lime-800 dark:text-lime-200">
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

                <div className="flex items-center justify-center gap-5 text-purple-800 dark:text-fuchsia-200">
                    <h1>Fetch count: {query.data}</h1>
                    <button
                        className="w-40 rounded-xl border bg-purple-500 py-2 font-light text-white shadow-lg dark:bg-purple-950"
                        onClick={() => query.refetch()}
                    >
                        Fetch some data
                    </button>
                </div>
            </main>
        </>
    )
}

export default App
