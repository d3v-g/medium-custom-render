import { ThemeContext, IThemeContext, Theme } from "./ThemeContext"
import { render, RenderOptions } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import { ReactElement } from "react"
import {
    QueryClient,
    QueryClientProvider,
    QueryClientConfig,
} from "@tanstack/react-query"

export function setupQueryClient(config?: QueryClientConfig | undefined) {
    if (!config) {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    retry: false,
                },
            },
        })
    } else return new QueryClient(config)
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
                    {options?.queryClient ? (
                        <QueryClientProvider client={options?.queryClient}>
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
        ...result,
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react"

export { customRender as render }
