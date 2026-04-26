import React from 'react'

function RadioButton() {
  return (
   <>
   <label htmlFor="">Gender</label> 
   <div className="flex gap-5">
    <label htmlFor="male">Male
        <input type="radio" value={"Male"} name="Gen" id="male"/>
    </label>

    <label htmlFor="female">Female
        <input type="radio" value={"Female"} name="Gen" id="female"/>
    </label>

   </div>
   </>
  )
}

export default RadioButton