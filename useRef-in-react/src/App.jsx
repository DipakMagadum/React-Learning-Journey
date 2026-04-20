import {useRef} from "react"
function App() {

  const h1Ref = useRef(null);
  const divRef = useRef(null);
  const paraRef = useRef(null);
  const changeColor =()=>{
    h1Ref.current.style.color="cyan"
  }

  const changeBgColor = () =>{
    divRef.current.style.backgroundColor="pink"
  }

  const changeSize = () => {
    paraRef.current.style.fontSize="20px"
  }

  return (
   <>
   <div className=" flex justify-center items-center h-screen ">
    <div  ref={divRef} className="flex flex-col  border border-black rounded-xl p-5 gap-4">
      <h1 ref={h1Ref} className="text-4xl text-center ">useRef  Hook In React... </h1>
      <p ref={paraRef}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quas nesciunt tempore. Maiores accusantium vero eius omnis eos et quaerat sit, minus est, provident consequatur perferendis ducimus id, fuga blanditiis.
      Natus, facere a reiciendis iste possimus quas beatae quo animi earum, laborum in nobis corporis nulla numquam veritatis eveniet sit inventore tenetur facilis nostrum odio quam nemo libero nam. Voluptates.
      Porro sequi facilis officiis animi sed et dolor repellat voluptates fugiat quia labore assumenda modi quaerat consequuntur fugit nulla, in quod veniam atque excepturi nisi a. Quidem cum beatae ipsum.
      Perferendis sapiente eligendi asperiores id dicta. Esse facere reprehenderit delectus dolore quaerat modi voluptas qui doloribus veritatis sequi vel voluptate blanditiis explicabo ducimus, similique obcaecati aliquid praesentium culpa? Eos, odit.</p>
      <div className="flex justify-center gap-2">
         <button  onClick={changeColor} className=" text-white bg-slate-700 p-2 rounded">Change textColor</button>
         <button onClick={changeBgColor} className=" text-white bg-slate-700 p-2 rounded">Change Background</button>
         <button onClick={changeSize} className=" text-white bg-slate-700 p-2 rounded">Change textSize</button>
      </div>
    </div>
    
   </div> 
   </>
  )
}

export default App
