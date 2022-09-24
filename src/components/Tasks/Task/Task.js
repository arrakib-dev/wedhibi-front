import {useParams} from "react-router-dom"

export default function App() {
    let urlParams = useParams()
    return (
        <h1 className="text-3xl font-bold underline">
            Task {urlParams.taskId}
        </h1>

    )
}