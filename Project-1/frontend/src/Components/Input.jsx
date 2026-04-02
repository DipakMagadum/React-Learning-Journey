import {useState} from "react"
export function Input({label}){

    const [input,setInput] = useState("")
    return(
        <>
        <label>{label}</label>
        <input className="border rounded p-1"
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        </>
    )
}