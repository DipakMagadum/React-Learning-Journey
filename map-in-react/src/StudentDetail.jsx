function StudentDetail() {

    const studentData =[
        {
            name:"luffy",
            rollNo:1,
            email:"luffy@gmail.com",
            city:"kolhapur"
        },

         {
            name:"zoro",
            rollNo:2,
            email:"zoro@gmail.com",
            city:"pune"
        },
        {
            name:"ussop",
            rollNo:3,
            email:"ussop@gmail.com",
            city:"mumbai"
        },

         {
            name:"brook",
            rollNo:4,
            email:"brook@gmail.com",
            city:"delhi"
        }
    ];
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
           {
    studentData.map((student)=>(
        <tr>
            <td>{student.rollNo}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.city}</td>
        </tr>
    ))

           }
        </tbody>
    </table>
    
    </>
  )
}

export default StudentDetail