import {useState} from "react"
export function Email(label){
    const[email, setEmail] = useState("")
    
    return(
        <>
        <label>{label}</label>
        <input className="border rounded p-1"
        
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
         {error && <p className="text-red-600">{label}{error}</p>}
        </>
    )
}