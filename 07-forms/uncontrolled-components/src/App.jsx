import { useRef } from "react";
function App() {
  // name and password ref
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  // gender ref radio buttons
  const maleRef = useRef(null);
  const femaleRef = useRef(null);

  // skills ref checkbox
  const reactRef = useRef(null);
  const javaRef = useRef(null);
  const javascriptRef = useRef(null);
  const sqlRef = useRef(null);

  // formhandler onSubmit
  const FormHandler = (e) => {
    e.preventDefault();
    // name and password useRef
    nameRef.current.style.color = "red";
    passwordRef.current.style.color = "red";

    const userName = nameRef.current.value;
    const password = passwordRef.current.value;

    // selected radio button Checking condition
    let genderSelector = "";

    if (maleRef.current.checked) {
      genderSelector = maleRef.current.value;
    } else if (femaleRef.current.checked) {
      genderSelector = femaleRef.current.value;
    }

    //  selected checkbox checking condition
    let selectedSkills = [];

    if (reactRef.current.checked) {
      selectedSkills.push(reactRef.current.value);
    }
    if (javaRef.current.checked) {
      selectedSkills.push(javaRef.current.value);
    }
    if (javascriptRef.current.checked) {
      selectedSkills.push(javascriptRef.current.value);
    }
    if (sqlRef.current.checked) {
      selectedSkills.push(sqlRef.current.value);
    }
    alert(
      `username is ${userName} and password is ${password} and gender is ${genderSelector}`,
    );

    alert(`Selected Skills Are ${selectedSkills}`);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          action=""
          method="Post"
          onSubmit={FormHandler}
          className="flex flex-col bg-white shadow-2xl w-99 px-5 py-3  gap-2 rounded-lg border border-gray-300"
        >
          <h1 className="bg-purple-400  p-1">Getting Value From TextBox</h1>
          <label className="text-gray-500">Name</label>
          <input
            className="border border-black rounded p-1"
            type="text"
            ref={nameRef}
            placeholder="name"
          />

          <label className="text-gray-500">Password</label>
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
          <label className="text-gray-500">Gender</label>
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
          {/* CheckBox */}
          <h1 className="bg-purple-400  p-1 ">Getting Value From Checkbox</h1>
          <label className="text-gray-500">Skills</label>
          <div className="flex gap-2">
            <input type="checkbox" value="React" ref={reactRef} />
            React
            <input type="checkbox" value="java" ref={javaRef} />
            Java
            <input type="checkbox" value="JavaScript" ref={javascriptRef} />
            JavaScript
            <input type="checkbox" value="SQL" ref={sqlRef} />
            SQL
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
