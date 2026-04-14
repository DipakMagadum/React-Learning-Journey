import React from 'react'
import {useState} from "react"

function Password({label}) {

    const [showPassword, setShowPassword] = useState(false);
    
  return (
    
    <>
    <label>{label}</label>
    <input className="border border-black rounded p-1  "
    type="password"
    placeholder="password"

    />
    </>
  )
}

export default Password