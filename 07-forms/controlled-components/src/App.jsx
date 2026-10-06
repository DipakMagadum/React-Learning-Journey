import Checkbox from "./Component/Checkbox";
import Textbox from "./Component/Textbox";
import RadioButton from "./Component/RadioButton";
import {useState} from "react"
import DropDown from "./Component/DropDown";
function App() {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");

    const clearText = ()=>{
      setName("")
      setLastname("")
    }
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div></div>
      <form action="" noValidate
        className="flex flex-col bg-white  shadow-2xl border border-gray-400 rounded-lg p-4 gap-3 w-[300px]"
      >
        <h1 className="text-center bg-lime-300 rounded p-1 font-semibold">Controlled Component</h1>
        <h1 className="text-center bg-sky-500 p-1 font-semibold">TextBox</h1>
        {/* first name input textbox */}
        <Textbox
          placeholder="Enter Your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <h3>{name}</h3>
        {/* last name input textbox */}
         <Textbox
          placeholder="Enter Your last name"
          value={lastname}
          onChange={(e)=>setLastname(e.target.value)}
        />
        <h3>{lastname}</h3>
       <button 
       type="button"
        className="bg-orange-500 p-1 text-white font-semibold text-xl rounded-xl"
        onClick={clearText}>Clear</button>

        {/* checkbox Handling */}
         <h1 className="text-center bg-sky-500 p-1 font-semibold">CheckBox</h1>
         <Checkbox/>

         {/* radioButton Handling */}
          <h1 className="text-center bg-sky-500 p-1 font-semibold">RadioButton</h1>
          <RadioButton/>

          {/* dropdown menu handling */}
          <h1 className="text-center bg-sky-500 p-1 font-semibold">DropDown Menu</h1>
          <DropDown/>
      </form>
       
    </div>
    </>
  )
}

export default App
