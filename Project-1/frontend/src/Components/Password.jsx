import {useState,useEffect} from "react"
export function Password(label){
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(()=>{

        if(password === ""){
            setError("Enter Password")
        }
        else{
            setError("")
        }
    },[password])
    return(
        <>
        <label>{label}</label>
        <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        </>
    )
}