import React from 'react'
import {useState} from "react"
function DropDown() {

    const [city, setCity] = useState("");

    const handleCity = (e)=>{
        setCity(e.target.value);
    }
  return (
   <>
   <label >Select City</label>
   <select onChange={handleCity}>
    <option value="pune">Pune</option>
    <option value="mumbai">Mumbai</option>
    <option value="delhi">Delhi</option>
    <option value="kolhapur">Kolhapur</option>
   </select>
   <h4> selected city is : {city}</h4>
   </>
  )
}

export default DropDown