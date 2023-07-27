import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import ProvideThemeContext from "./ThemeContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ProvideThemeContext>
            <App />
        </ProvideThemeContext>
    </React.StrictMode>,
)
