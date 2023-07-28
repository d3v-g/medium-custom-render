import { createContext, useEffect, useState } from "react"

//eslint-disable-next-line react-refresh/only-export-components
export enum Theme {
    DARK,
    LIGHT,
}

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
    const [theme, setTheme] = useState(Theme.LIGHT)

    useEffect(() => {
        // add dark class to html
        if (theme === Theme.DARK) document.documentElement.classList.add("dark")
        if (theme === Theme.LIGHT)
            document.documentElement.classList.remove("dark")
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
