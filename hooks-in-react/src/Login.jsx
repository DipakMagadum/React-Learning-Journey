import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import { Eye, EyeOff } from "lucide-react";
export function Login(){
const [username, setUsername] = useState("");
const [password, setPass] = useState("");
const [error, setError] = useState({username:"",password:""});
const [msg, setMsg] = useState("");
const [showpass, setSPass] = useState(false)


        useEffect=(()=>{

         let NewError={username:"",password:""}
            
              const passwordpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

            if(username.trim() === ""){
                NewError.username="Username Required !";
                
            }
            else if(username.length < 2){
                NewError.username="Username atleast 4 char long";
                
            }
            if(password === ""){
                NewError.password="Password Required !";
                
            }
            else if(password.length < 8){
                NewError.password="Password must be 8 char long";
                
            }
            else if(!passwordpattern.test(password)){
                NewError.password="invalid Password"
            }
            setError(NewError);
          },[username,password])

       const validate=(e)=>{
            e.preventDefault();

            if(!error.username && !error.password){
                setMsg("Login Successful")
            }
            else{
                setMsg("")
            }
       }
    return(
        <>
        <div className="flex justify-center items-center h-screen">
            <form  onSubmit={validate} noValidate
            
            className="flex flex-col bg-white shadow-xl/30 p-6 gap-4 w-70">

                <h1 className="text-center text-sky-600 text-xl font-bold">Login</h1>

                <p className="text-center text-xl text-green-400">{msg}</p>

                <label>Username</label>
                <input className="border p-1 rounded "
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            <p className="text-red-700">{error.username}</p>

                <label>Password</label>
                 <div className="relative inline-block w-full max-w-sm">
                <input  className="border p-1 rounded "
                type={showpass ? "text" : "password"}
                placeholder="password"
                value={password}
                onChange={(e)=>setPass(e.target.value)}
                />
                 <span
               onClick={() => setSPass(!showpass)}
              className="absolute right-3 top-1/3 cursor-pointer text-gray-600"
           >
                {showpass ? <EyeOff/>  :<Eye/> }
              </span>
                </div>


            <p className="text-red-700">{error.password}</p>
                <button className="bg-sky-600 p-1 rounded-xl">Login</button>
                <span>Don't have Accout? <Link className="text-sky-700" to="/register">Register</Link></span>
            </form>
        </div>
        </>
    )
}