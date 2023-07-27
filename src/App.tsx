import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const App: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <>
            <div>
                <h1 className="text-red-600">
                    Dark theme: {theme === "dark" ? "on" : "off"}
                </h1>
                <button
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                >
                    Change Theme
                </button>
                <div className="text-lime-600">
                    You are currently on the Home page
                </div>
            </div>
        </>
    )
}

export default App
