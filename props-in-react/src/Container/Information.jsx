import React from 'react'
import Student from '../Components/Student'
function Information() {

   let StudentDetail={name:"Dipak", rollNo:17, city:"kolhapur", email:"dipak@gmail.com"}
  return (

    <>
    <Student 
    
    student={StudentDetail}
    />
    </>
  )
}

export default Information