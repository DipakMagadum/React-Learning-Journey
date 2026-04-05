import React from 'react'

function Navbar({items}) {
  return (
    <>
  
        <ul className="flex justify-end bg-sky-500 text-white gap-7 p-3 ">
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    
    </>
  )
}

export default Navbar