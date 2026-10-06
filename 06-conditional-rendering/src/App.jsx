import {useState} from "react"
import Home from "./Home"
function App() {
  const [show, setShow] = useState(false)
  return (
  <>
    <h1>Toggle button in React using useState</h1>

    <button onClick={()=>setShow(!show)}>Show/hide</button>

    {show ? <Home/>:null}
  </>
  )
}

export default App
