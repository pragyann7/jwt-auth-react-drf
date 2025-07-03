
function ErrorAuth() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1>Authentication Error...</h1>
                <p>go back to <a href="/"><span className="text-blue-600 hover:underline">Login</span></a> page.</p>
            </div>
        </div>
    )
}

export default ErrorAuth
