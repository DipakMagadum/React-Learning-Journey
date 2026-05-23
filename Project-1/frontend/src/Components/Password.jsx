import {useState,useEffect} from "react"
export function Password({label}){
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(()=>{

        if(password === ""){
            setError("Enter Password")
        }
        else if(password.length < 6){
            setError("password must be atleas 6 character long")
        }
        else{
            setError("")
        }
    },[password])
    return(
        <>
        <label>{label}</label>
        <input
        className="border rounded p-1"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
         {error && <p className="text-red-600">{error}</p>}
        </>
    )
}