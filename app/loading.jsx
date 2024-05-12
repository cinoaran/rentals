

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="animate-spin-slow rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-gray-700">
                    Loading site...
                </p>
            </div>
        </div>
    )
}

export default Loading