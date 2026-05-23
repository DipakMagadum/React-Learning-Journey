import React from 'react'

function Login() {
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
            />
            <label >Password</label>
            <input
            className='border border-gray-400 rounded-sm p-1'
            type='password'
            placeholder='Password'
            />
            <button className='bg-sky-600 py-1 px-3 rounded-2xl text-white font-serif'>Login</button>
            
        </div>
    </div>
    </>
  )
}

export default Login