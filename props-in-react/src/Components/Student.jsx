import React from 'react'

function Student({student}) {

   
  return (
    <>
    <h3>Name is :{student.name}</h3>
    <h3>Roll no is :{student.rollNo}</h3>
    <h3>City is :{student.city}</h3>
    <h3>Email is :{student.email}</h3>
    </>
  )
}

export default Student