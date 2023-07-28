import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const App: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <>
            <div className="flex h-screen flex-col justify-center bg-gray-50 text-center font-semibold dark:bg-slate-900">
                <div className="flex items-center justify-center gap-5 text-sky-900 dark:text-slate-200">
                    <h1>Dark theme: {theme === "dark" ? "on" : "off"}</h1>
                    <button
                        className="w-32 rounded-xl border bg-slate-700 py-2 font-light text-white shadow dark:bg-slate-700"
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                    >
                        Change Theme
                    </button>
                </div>
                <div className="mt-8 text-lime-800 dark:text-lime-200">
                    <h1>You are currently on the Home page</h1>
                </div>
            </div>
        </>
    )
}

export default App
