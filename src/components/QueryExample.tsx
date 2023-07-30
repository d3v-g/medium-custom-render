import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

const QueryExample: React.FC = () => {
    const [fetchCount, setFetchCount] = useState(0)

    const query = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            setFetchCount((prevCount) => prevCount + 1)
            return Promise.resolve(fetchCount)
        },
    })

    return (
        <section
            className="flex items-center justify-center gap-5 text-purple-800 dark:text-fuchsia-200"
            data-testid="query example"
        >
            <h1>Fetch count: {query.data}</h1>
            <button
                className="w-40 rounded-xl border bg-purple-500 py-2 font-light text-white shadow-lg dark:bg-purple-950"
                onClick={() => query.refetch()}
            >
                Fetch some data
            </button>
        </section>
    )
}

export default QueryExample
