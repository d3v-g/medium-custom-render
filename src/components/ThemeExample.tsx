import { ThemeContext, Theme } from "../ThemeContext"
import { useContext } from "react"

const ThemeExample: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <section
            className="flex items-center justify-center gap-5 text-sky-900 dark:text-slate-200"
            data-testid="theme example"
        >
            <h1>Dark mode: {theme === Theme.DARK ? "On" : "Off"} </h1>
            <button
                className="w-32 rounded-xl border bg-slate-700 py-2 font-light text-white shadow-lg dark:bg-slate-700"
                onClick={() =>
                    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
                }
            >
                Change Theme
            </button>
        </section>
    )
}

export default ThemeExample
