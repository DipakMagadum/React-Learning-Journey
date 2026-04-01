import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
export function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpass, setCpass] = useState("");
    const [error, setError] = useState({username:"",email:"",password:"",cpass:""});

    useEffect(()=>{
        let NewError={username:"",email:"",password:"",cpass:""}

         const emailPattern = /^[a-z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.(com|in)$/;
        const passwordpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

        if(username === ""){
            NewError.username="Enter username"
        }
        if(email=== ""){
            NewError.email="Enter Email"; 
        }

         else if(!emailPattern.test(email)){
            NewError.email="Invalid Email"
         }
        if(password === ""){
            NewError.password="Enter Password"; 
        }
        else if(!passwordpattern.test(password)){
            NewError.password="Invalid Password"
        }
        if(cpass === ""){
             NewError.cpass="Enter Confirm Password";
        }

        if(!password === cpass){
            NewError.cpass="Password do not match"
        }
        setError(NewError);

    },[username,email,password,cpass])
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
            <p  className="text-red-500">{error.username}</p>

            <label>Email</label>
            <input className="border p-1 rounded-xl"
             type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <p  className="text-red-500">{error.email}</p>

             <label>Password</label>
            <input className="border p-1 rounded-xl"
             type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <p  className="text-red-500">{error.password}</p>

             <label>Confirm Password</label>
            <input className="border p-1 rounded-xl"
             type="password"
            placeholder="Confirm Password"
            value={cpass}
            onChange={(e)=>setCpass(e.target.value)}
            />
            <p className="text-red-500">{error.cpass}</p>

            <button className="text-white bg-sky-500 p-1 rounded-2xl mt-3">Register</button>

            <span>Have an Account ? <Link  to="/"
            className="text-sky-500">Login</Link></span>
            </form>
        </div>
        </>
    )
}