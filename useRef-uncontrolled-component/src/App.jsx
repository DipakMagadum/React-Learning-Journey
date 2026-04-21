function App() {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <form action=""
        className="flex flex-col bg-white shadow-2xl w-90 px-5 py-3  gap-2 rounded-lg border border-gray-300"
      >
        <h1>Getting Value From TextBox</h1>
        <label >Name</label>
        <input
          className="border border-black rounded p-1"
         type="text" placeholder="name"/>

          <label >Password</label>
         <input 
          className="border border-black rounded p-1"
           type="password" placeholder="Password"
         />
         <button className="bg-sky-500 rounded-lg p-1 text-white">Submit</button>
      </form>
    </div>
    </>
  )
}

export default App;
