import React from "react";
import Base from "../Base/Base";
import { useNavigate } from "react-router-dom";
const Students = ({students, setStudents}) => {
    const navigate = useNavigate()
    const deleteStudent = async (studentID) =>{
        try {
          const res = await fetch(`https://656af622dac3630cf727805f.mockapi.io/students/${studentID}`,{
            method : "DELETE"
          });
        let data = await res.json();
          const removeStudent = students.filter(student=>student.id !== studentID);
        setStudents(removeStudent)
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <Base
        Title = {'Student Info'}
        Description={"All Student info will be displayed here"}
        >
        <div className='stud-collections'>
         {students.map((stud, idx)=>(
            <div className="stud-card" key={idx}>
                <h3>{stud.name}</h3>
                <p>Batch : {stud.batch}</p>
                <p>Education : {stud.education}</p>
                <p>Gender : {stud.gender}</p>
                <p>Skills : {stud.skills}</p>
                <div className='card-btn-group'>
                 <button onClick={()=>navigate(`/Editstudents/${stud.id}`)}>Edit</button>
                 <button onClick={()=>deleteStudent(stud.id)}>Delete</button>
                </div>
            </div>
         ))}
        </div>
        </Base>
    );
  }
export default Students





