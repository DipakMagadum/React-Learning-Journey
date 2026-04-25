import React from 'react'

function Checkbox() {
  return (
    <>
    <div className="flex gap-3">
      <label>Skills:</label>
      <label
    htmlFor="javaScript">JavaScript
    <input
      className=""
    type="checkbox" value="javaScript" id="javaScript" />
    </label>

    <label
    htmlFor="react">React
    <input
      className=""
    type="checkbox" value="react" id="react" />
    </label>

    <label
    htmlFor="java">Java
    <input
      className=""
    type="checkbox" value="java" id="java" />
    </label>
    </div>
    </>
  )
}

export default Checkbox;