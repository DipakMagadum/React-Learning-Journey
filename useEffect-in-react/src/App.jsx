import { useState,useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [Countreverse,setCountReverse] =useState(0);

  // useEffect runs whenever the count state value updates
  useEffect(()=>{
     hello(); 
  },[count])

  function hello() {
    console.log("useEffect in react")
    
  }
 
  return (
    <>
    <h1 className=" text-2xl text-center mt-5 font-semibold text-fuchsia-500">useEffect In react</h1>

   <div className="flex justify-center items-center   p-3">
    <div className="flex flex-col w-52 gap-2 border p-4">
       <button className="bg-sky-500 p-1 rounded-lg text-center text-white"
    onClick={()=>setCount(count+1)}>Count {count}</button>

    <button  className="bg-sky-500 p-1 rounded-lg text-center text-white"
    onClick={()=>setCountReverse(Countreverse-1)}>ReverseCount {Countreverse}</button>
    </div>
   </div>
    </>
  );
}

export default App;
