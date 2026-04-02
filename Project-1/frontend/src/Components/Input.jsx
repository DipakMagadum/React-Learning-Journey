import {useState,useEffect} from "react"
export function Input({label,placeholder}){

    const [input,setInput] = useState("")
    const [error,setError] = useState("")

    useEffect(()=>{
        
        if(input === ""){
            setError(" is Required")
        }
        
    },[input])
    return(
        <>
        <label>{label}</label>
        <input className="border rounded p-1"
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        {error && <p className="text-red-600">{label}{error}</p>}
        </>
    )
}