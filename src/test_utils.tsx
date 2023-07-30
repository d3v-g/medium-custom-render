import { ThemeContext, IThemeContext, Theme } from "./ThemeContext"
import { render, RenderOptions } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import { ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

let queryClient: QueryClient | null

export function setupQueryClient() {
    queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    })
}

export function clearQueryClient() {
    queryClient = null
}

interface IExtendedRenderOptions extends RenderOptions {
    theme?: IThemeContext
    initialEntries?: string[]
    queryClient?: QueryClient
}

export const customRender = (
    ui: ReactElement,
    options?: Omit<IExtendedRenderOptions, "wrapper">,
) => {
    const defaultTheme: IThemeContext = {
        theme: Theme.LIGHT,
        setTheme: vi.fn(),
    }

    const Wrapper = ({ children }: { children: React.ReactNode }) => {
        return (
            <ThemeContext.Provider value={options?.theme ?? defaultTheme}>
                <MemoryRouter initialEntries={options?.initialEntries ?? ["/"]}>
                    {queryClient ? (
                        <QueryClientProvider client={queryClient}>
                            {children}
                        </QueryClientProvider>
                    ) : (
                        children
                    )}
                </MemoryRouter>
            </ThemeContext.Provider>
        )
    }

    const result = render(ui, { wrapper: Wrapper, ...options })

    return {
        user: userEvent.setup(),
        queryClient,
        ...result,
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react"

export { customRender as render }
