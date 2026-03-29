import {useState} from "react"
export function Login(){
const [username, setUsername] = useState("");
const [password, setPass] = useState("");
    return(
        <>
        <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col bg-white shadow-xl/30 p-6 gap-4 w-70">
                <h1 className="text-center text-sky-600 text-xl font-bold">Login</h1>
                <label>Username</label>
                <input className="border p-1 rounded "
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />

                <label>Password</label>
                <input  className="border p-1 rounded "
                type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPass(e.target.value)}
                />

                <button className="bg-sky-600 p-1 rounded-xl">Login</button>
            </form>
        </div>
        </>
    )
}