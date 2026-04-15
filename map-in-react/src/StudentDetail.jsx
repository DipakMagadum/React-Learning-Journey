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
    <div className="flex justify-center">
         <table className="border border-black" >
        <thead className="border border-black">
            <tr >
                <th >Roll No</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody >
           {
    studentData.map((student)=>(
        <tr className="border border-black"
            key={student.rollNo}
        >
            <td className="border border-black">{student.rollNo}</td>
            <td className="border border-black">{student.name}</td>
            <td className="border border-black">{student.email}</td>
            <td className="border border-black">{student.city}</td>
        </tr>
    ))
           }
        </tbody>
    </table>
    </div>
   
    
    </>
  )
}

export default StudentDetail