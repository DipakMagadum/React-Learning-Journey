import React from 'react'
import {useState} from "react"
function Checkbox() {

  const [skills, setSkills] = useState("");
  const handleSkills = (e)=>{
    // console.log(e.target.value,e.target.checked);

    if(e.target.checked){
      setSkills([...skills,e.target.value])
    }
    else{
      setSkills([...skills.filter((item)=>item!=e.target.value)])
    }
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
    type="checkbox" value="React" id="react" />
    </label>

    <label
    htmlFor="java">Java
    <input
     onChange={handleSkills}
    type="checkbox" value="Java" id="java" />
    </label>
    </div>
    <div className="flex flex-col"><h4>{skills}</h4></div>
    </>
  )
}

export default Checkbox;