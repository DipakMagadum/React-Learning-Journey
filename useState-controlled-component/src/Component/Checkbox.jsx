import React from 'react'
import {useState} from "react"
function Checkbox() {

  const [skills, setSkills] = useState("");
  const handleSkills = (e)=>{
    console.log(e.target.value,e.target.checked);
  } 
  return (
    <>
    <div className="flex gap-3">
      <label>Skills:</label>
      <label
    htmlFor="javaScript">JavaScript
    <input
       onChange={handleSkills}
    type="checkbox" value="javaScript" id="javaScript" />
    </label>

    <label
    htmlFor="react">React
    <input
      onChange={handleSkills}
    type="checkbox" value="react" id="react" />
    </label>

    <label
    htmlFor="java">Java
    <input
     onChange={handleSkills}
    type="checkbox" value="java" id="java" />
    </label>
    </div>
    </>
  )
}

export default Checkbox;