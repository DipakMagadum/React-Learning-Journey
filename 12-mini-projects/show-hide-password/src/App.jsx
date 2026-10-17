import Password from "./Password"

function App() {
  return (
   <>
   <div className=" flex bg-sky-400 mt-5 justify-center">
    <h2 className="p-4 text-xl text-center">Show Hide Password Icon </h2>
      </div>

       <div className="flex  justify-center mt-5  ">  

        <form className="   flex flex-col w-72 bg-white  border border-black  rounded-xl p-6 gap-2 ">
           <Password
         label="Enter password"
         />
        </form>
    </div>

   
   </>
  )
}

export default App
