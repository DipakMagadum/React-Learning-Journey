import { useState,useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [Countreverse,setCountReverse] =useState(0);

  useEffect(()=>{
     hello();
  },[])

  function hello() {
    console.log("useEffect in react")
  }
 
  return (
    <>
    <h1>useEffect In react</h1>

    <button onClick={()=>setCount(count+1)}>Count{count}</button>
    <button onClick={()=>setCountReverse(Countreverse-1)}>ReverseCount{Countreverse}</button>
    </>
  );
}

export default App;
