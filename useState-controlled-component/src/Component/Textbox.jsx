import React from 'react'

function Textbox({placeholder,value,onChange}) {
  return (
    <>
    <input 
        className="border border-black p-1 rounded"

        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
    </>
  )
}

export default Textbox