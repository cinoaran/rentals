import { LuLoader } from "react-icons/lu";

const Loading = () => {
    return (
        <div className="animate-spin flex items-center justify-center p-20">
            <LuLoader size="9em" className="text-blue-900/60" />
        </div>
    )
}

export default Loading