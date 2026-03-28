export function Login(){
    return(
        <>
        <div className="flex justify-center items-center h-screen">

            <form className="flex flex-col bg-white shadow-xl/30 p-7 w-80 gap-4">
                <h1 className="text-center text-green-800 font-bold text-xl">Login</h1>
                <label>Username</label>
                <input className="border p-1 rounded"
                 type="text" placeholder="username"/>

                <label>Password</label>
                <input className="border p-1 rounded"
                 type="password" placeholder="password"/>

                <button className="bg-green-700  text-white text-lg p-2 rounded-xl ">Login</button>
            </form>
        </div>
        </>
    )
}