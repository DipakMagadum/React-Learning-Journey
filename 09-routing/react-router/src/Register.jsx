import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className= 'flex flex-col bg-white shadow-2xl w-80  gap-3 p-7 '>
            <h1 className='text-center text-sky-600 font-semibold font-serif'>Register</h1>
            <label >First Name</label>
            <input
            className='border border-gray-400 rounded-sm p-1'
            type='text'
            placeholder='First Name'
            />

            <label >Last Name</label>
            <input
            className='border border-gray-400 rounded-sm p-1'
            type='text'
            placeholder='Last Name'
            />

             <label >Email</label>
            <input
            className='border border-gray-400 rounded-sm p-1'
            type='email'
            placeholder='Email'
            />

             <label >Password</label>
            <input
            className='border border-gray-400 rounded-sm p-1'
            type='password'
            placeholder='Password'
            />

             <label >Confirm Password</label>
            <input
            className='border border-gray-400 rounded-sm p-1'
            type='password'
            placeholder='Confirm Password'
            />
            <button className='bg-sky-600 py-1 px-3 rounded-2xl text-white font-serif'>Register</button>
                <span>Already have an account ?<Link className='text-blue-600 hover:underline' to="/login">Login</Link></span>
            
        </div>
    </div>
    </>
  )
}

export default Register