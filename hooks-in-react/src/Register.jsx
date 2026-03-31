import {useState} from "react";
import {Link} from "react-router-dom";
export function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpass, setCpass] = useState("");
    return(
        <>
        <div className="flex justify-center items-center h-screen">

            <form className="flex  flex-col bg-white shadow-xl/30 p-6 gap-3 w-80 rounded-2xl">

            <h1 className="text-center text-sky-500 text-2xl font-bold">Register</h1>

            <label>Username</label>
            <input className="border p-1 rounded-xl"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />

            <label>Email</label>
            <input className="border p-1 rounded-xl"
             type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />

             <label>Password</label>
            <input className="border p-1 rounded-xl"
             type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />

             <label>Confirm Password</label>
            <input className="border p-1 rounded-xl"
             type="password"
            placeholder="Confirm Password"
            value={cpass}
            onChange={(e)=>setCpass(e.target.value)}
            />

            <button className="text-white bg-sky-500 p-1 rounded-2xl mt-3">Register</button>

            <span>Have an Account ? <Link className="text-sky-500">Login</Link></span>
            </form>
        </div>
        </>
    )
}