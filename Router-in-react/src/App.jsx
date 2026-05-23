import {Routes,Route} from "react-router-dom"
import {Home} from "./Home.jsx"
import Login from "./Login.jsx"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
