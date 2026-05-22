import {useState,useEffect} from "react"
export function Email({label}){
    const[email, setEmail] = useState("");
    const[error,setError] = useState("");

    useEffect(()=>{
 const emailPattern =
            /^[a-z][a-zA-Z0-9._%+-]*@(gmail\.com|yahoo\.com|outlook\.com)$/;

        
        if(email === ""){
            setError("Enter Email")
        }
        else if (!emailPattern.test(email)){
            setError("Enter Valid Email")
        } 
        else{
            setError("")
        }
    },[email])
    return(
        <>
        <label>{label}</label>
        <input className="border rounded p-1"
        
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
         {error && <p className="text-red-600">{error}</p>}
        </>
    )
}