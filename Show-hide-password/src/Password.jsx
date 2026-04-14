
import {useState} from "react"
import {Eye, EyeOff} from "lucide-react"
function Password({label}) {

    const [showPassword, setShowPassword] = useState(false);

  return (
    
    <>
    <label>{label}</label>
    <input className="  border border-black rounded p-1  "
    type={showPassword?"text":"password"} //this is a ternary operator Syntax: condition ? value_if_true : value_if_false.
    placeholder="password"

    />
    <div>
         <button 
         type="button"
         onClick={()=>setShowPassword(!showPassword)}
         >
           {showPassword?<Eye size={20}/>:<EyeOff size={20}/>}
         </button>
    </div>
   
    </>
  )
}

export default Password