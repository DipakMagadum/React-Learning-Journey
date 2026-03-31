export function Register(){
    return(
        <>
        <div className="flex justify-center items-center h-screen">

            <form className="flex  flex-col bg-white shadow-xl/30 p-6 gap-3 w-80 rounded-2xl">

            <h1 className="text-center text-sky-500 text-2xl font-bold">Register</h1>

            <label>Username</label>
            <input className="border p-1 rounded-xl"
            type="text"
            placeholder="Username"
            />

            <label>Email</label>
            <input className="border p-1 rounded-xl"
             type="email"
            placeholder="Email"
            />

             <label>Password</label>
            <input className="border p-1 rounded-xl"
             type="password"
            placeholder="Password"
            />

             <label>Confirm Password</label>
            <input className="border p-1 rounded-xl"
             type="password"
            placeholder="Confirm Password"
            />

            <button className="text-white bg-sky-500 p-1 rounded-2xl mt-3">Register</button>

            </form>
        </div>
        </>
    )
}