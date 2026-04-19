import {useRef} from "react"
function App() {

  const h1Ref = useRef(null);
  const divRef = useRef(null);
  const changeColor =()=>{
    h1Ref.current.style.color="cyan"
  }

  const changeBgColor = () =>{
    divRef.current.style.backgroundColor="pink"
  }
  return (
   <>
   <div className=" flex justify-center items-center h-screen ">
    <div  ref={divRef} className="flex flex-col  border border-black rounded-xl p-5 gap-4">
      <h1 ref={h1Ref} className="text-4xl text-center ">useRef  Hook In React... </h1>
      <div className="flex justify-center gap-2">
         <button  onClick={changeColor} className=" text-white bg-slate-700 p-2 rounded">Change text color</button>
         <button onClick={changeBgColor} className=" text-white bg-slate-700 p-2 rounded">Change Background</button>
      </div>
    </div>
    
   </div> 
   </>
  )
}

export default App
