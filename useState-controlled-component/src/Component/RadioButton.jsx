import React from 'react';
import {useState} from "react";
function RadioButton() {

    const [gender, setGender] = useState("");

    const handleGender = (e)=>{
        setGender(e.target.value);
    }
  return (
   <>
   <label htmlFor="">Gender</label> 
   <div className="flex gap-5">

    {/* radiobutton for male */}
    <label htmlFor="male">Male
        <input type="radio"
         value={"Male"}
          name="Gen"
           id="male"
           onChange={handleGender}/>
    </label>

    {/* radiobutton for female */}
    <label htmlFor="female">Female
        <input type="radio"
         value={"Female"} 
         name="Gen"
          id="female"
           onChange={handleGender}/>
    </label>
   </div>
   <h4>You are:{gender}</h4>
   </>
  )
}

export default RadioButton