import {useEffect} from "react";
function App() {

   useEffect (()=>{
      usersData()
    },[])

  async function usersData (){

   
    const url = "http://localhost:3000/users"

    let response = await fetch(url)
    response = await response.json()
    console.log(response)

  }
  return (
   <>
   </>
  )
}

export default App
