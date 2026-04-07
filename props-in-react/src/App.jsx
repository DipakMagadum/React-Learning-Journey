import Button from "./Components/Button"
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
function App() {
  return (
   <>

   <Navbar items={["Home","About us","Login"]}
   />
   <div className="flex ml-96 mt-52">
  <h1 className='bg-green-400 text-white text-center text-xl p-4 rounded-xl w-80 '>Props In React</h1>
    </div>

    <Card 
    name="Naruto"
    btnText="Click"
    />
    <br/>
<Navbar items={["Home","Register","Login"]}
   />
    <Card
    name="Sasuke"
    btnText="click Me"
    />
    <Button 
    btnText="submit"
    />
   </>
  )
}

export default App
