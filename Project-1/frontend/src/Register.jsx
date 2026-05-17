import Button from "./Components/Button";
import { Email } from "./Components/Email";
import { Input } from "./Components/Input";
import {Password} from "./Components/Password"
import { Link } from "react-router-dom";
export function Register(){
    return(
        <>
        <div className="flex justify-center items-center h-screen">

            <form className="flex flex-col bg-white shadow-xl/50 w-90 rounded-xl p-6">

            <h1 className="text-center text-sky-600 font-bold text-xl ">Register</h1>

            <Input
            label="Username"
            placeholder="Username"
            />

            <Email 
            label="Email"
            />

            <Password
            label="Password"
            />
           
           <Button
           name="Register"
           />

          <span className="mt-2 text-sky-600 hover:underline"> <Link to="/login">Already Register?Login</Link></span>

            </form>
        </div>
        </>
    )
}