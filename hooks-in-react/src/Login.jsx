import {useState} from "react"
export function Login(){
const [username, setUsername] = useState("");
const [password, setPass] = useState("");
    return(
        <>
        <div className="">
            <form>
                <h1>Login</h1>
                <label>Username</label>
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />

                <label>Password</label>
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPass(e.target.value)}
                />

                <button>Login</button>
            </form>
        </div>
        </>
    )
}