import {useState} from "react"
function App() {
  const [show, setShow] = useState(false)
  return (
  <>
    <h1>Toggle button in React using useState</h1>

    <button onClick={()=>setShow(!show)}>Show/hide</button>

    {show ? <h3>hello</h3>:null}
  </>
  )
}

export default App
