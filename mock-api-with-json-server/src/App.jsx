import {useEffect} from "react";
import {useState} from "react";
function App() {

    const [userData, setUserData] = useState([]);

  
   useEffect (()=>{
      usersData()
    },[])

  async function usersData (){

   
    const url = "http://localhost:3000/users"

    let response = await fetch(url)
    response = await response.json()
    console.log(response)
    setUserData(response)
    

  }
  return (
   <>
   {
     userData.map((users)=>(

      <div 
      key={userData.id}
      className="flex justify-center items-center mt-10 ">
         <ul className="bg-white shadow-xl p-3 rounded border border-gray-600">
        <li>Id : {users.id}</li>
        <li>Name : {users.name}</li>
        <li>Email : {users.email}</li>
        <li>City : {users.city}</li>
      </ul>
   </div>
    ))
  }
   </>
  )
}

export default App
