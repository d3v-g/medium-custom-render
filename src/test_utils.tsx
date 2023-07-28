import { ThemeContext, Theme } from "./ThemeContext"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import { ReactElement } from "react"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const defaultTheme = {
    theme: Theme.LIGHT,
    setTheme: () => vi.fn(),
}

// let queryClient

// export function setQueryClient() {
//     queryClient = new QueryClient({
//         defaultOptions: {
//             queries: {
//                 retry: false,
//             },
//         },
//     })
// }

// export function clearQueryClient() {
//     queryClient = null
// }

export const customRender = (
    ui: ReactElement,
    { theme = defaultTheme, initialEntries = ["/"], ...options } = {},
) => {
    interface WrapperProps {
        children?: React.ReactNode
    }
    // wrap contexts
    const Wrapper: React.FC<WrapperProps> = ({ children }) => {
        return (
            <ThemeContext.Provider value={theme}>
                <MemoryRouter initialEntries={initialEntries}>
                    {children}
                </MemoryRouter>
            </ThemeContext.Provider>
        )
    }

    const result = render(ui, { wrapper: Wrapper, ...options })

    return {
        user: userEvent.setup(),
        ...result,
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react"

export { customRender as render }
