import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import ProvideThemeContext from "./ThemeContext.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <h1>You are on the Home page</h1>,
            },
            {
                path: "about",
                element: <h1>You are on the About page</h1>,
            },
            {
                path: "contact",
                element: <h1>You are on the Contact page</h1>,
            },
        ],
    },
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ProvideThemeContext>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ProvideThemeContext>
    </React.StrictMode>,
)
