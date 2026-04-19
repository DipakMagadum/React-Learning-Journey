import {Login} from "./Login.jsx"
import {Register} from "./Register.jsx"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
   </Routes>
   </>
  )
}

export default App
