import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect} from 'react'
function Login() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] =  useState("")
  const [error, setError]  =  useState("")

  useEffect(()=>{

    if(userName === ""){
      setError("Enter Username")
    }
    else if(userName.length < 4){
      setError("Username mustbe 6 chr long")
    }
    else{
      setError("")
    }
    if(password === ""){
      setError("Enter Password")

    }
  },[userName,password])
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className= 'flex flex-col bg-white shadow-2xl w-80  gap-3 p-7 '>
            <h1 className='text-center text-sky-600 font-semibold font-serif'>Login</h1>
            <label >Username</label>
            <input
            className='border border-gray-400 rounded-sm p-1'
            type='text'
            placeholder='Username'
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            />
            <span className='text-red-700'>{error}</span>

            <label >Password</label>
            <input
            className='border border-gray-400 rounded-sm p-1'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
             <span className='text-red-700'>{error}</span>
            <button className='bg-sky-600 py-1 px-3 rounded-2xl text-white font-serif'>Login</button>
             <span>Don't have an account ?<Link className='text-blue-600 hover:underline' to="/register">Register</Link></span>
        </div>
    </div>
    </>
  )
}

export default Login