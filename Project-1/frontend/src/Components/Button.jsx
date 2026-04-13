import React from 'react'

function Button({name}) {
  return (
    
        <button className="bg-sky-500 mt-5 w-full p-2 rounded-xl text-white text-xl">
            {name}
            </button>
  )
}

export default Button