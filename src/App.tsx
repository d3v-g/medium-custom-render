import { Outlet } from "react-router-dom"
import ThemeExample from "./examples/ThemeExample"
import RouterExample from "./examples/RouterExample"
import QueryExample from "./examples/QueryExample"

const App: React.FC = () => {
    return (
        <>
            <main className="flex h-screen flex-col justify-center gap-8 bg-gray-50 text-center font-semibold dark:bg-slate-900 dark:text-slate-200">
                <ThemeExample />
                <Outlet />
                <RouterExample />
                <QueryExample />
            </main>
        </>
    )
}

export default App
