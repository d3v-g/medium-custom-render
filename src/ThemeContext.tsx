import { createContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

interface ThemeContextProps {
    theme: Theme | null
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: null,
    setTheme: () => null,
})

interface ProvideThemeContextProps {
    children?: React.ReactNode
}

const ProvideThemeContext: React.FC<ProvideThemeContextProps> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme | null>("light")

    useEffect(() => {
        // add dark class to html
        if (theme === "dark") document.documentElement.classList.add("dark")
        if (theme === "light") document.documentElement.classList.remove("dark")
    }, [theme])

    const value = {
        theme: theme,
        setTheme: setTheme,
    }

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

export default ProvideThemeContext
