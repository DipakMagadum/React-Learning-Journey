import { useRef } from "react";
function App() {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const maleRef = useRef(null);
  const femaleRef = useRef(null);

  const FormHandler = (e) => {
    e.preventDefault();
    nameRef.current.style.color = "red";
    passwordRef.current.style.color = "red";

    const userName = nameRef.current.value;
    const password = passwordRef.current.value;

    let genderSelector = "";

    if (maleRef.current.checked) {
      genderSelector = maleRef.current.value;
    } else if (femaleRef.current.checked) {
      genderSelector = femaleRef.current.value;
    }
    alert(
      `username is ${userName} and password is ${password} and gender is ${genderSelector}`,
    );
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          action=""
          method="Post"
          onSubmit={FormHandler}
          className="flex flex-col bg-white shadow-2xl w-90 px-5 py-3  gap-2 rounded-lg border border-gray-300"
        >
          <h1 className="bg-purple-400  p-1">Getting Value From TextBox</h1>
          <label>Name</label>
          <input
            className="border border-black rounded p-1"
            type="text"
            ref={nameRef}
            placeholder="name"
          />

          <label>Password</label>
          <input
            className="border border-black rounded p-1"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />

          {/* radioButton */}
          <h1 className="bg-purple-400  p-1 ">
            Getting Value From RadioButtons
          </h1>
          <label>Gender</label>
          <div className="flex  gap-2">
            <input
              className="cursor-pointer"
              type="radio"
              value="Male"
              name="gender"
              ref={maleRef}
            />
            Male
            <input
              className="cursor-pointer"
              type="radio"
              value="Female"
              name="gender"
              ref={femaleRef}
            />
            Female
          </div>

          <button className="bg-sky-500 rounded-lg p-1 text-white">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
