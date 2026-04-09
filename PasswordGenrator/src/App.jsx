import {useState} from "react"
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  return (
   <>
   <h1 className="text-4xl text-center">PasswordGenrator</h1>

   </>
  )
}

export default App
