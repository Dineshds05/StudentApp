import React from "react";
import Base from "../Base/Base";
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
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
               <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: 1,
                      width: 180,
                      height: 250,
                    },
                  }}
                >
            <Paper elevation={10}>
                <h3>{stud.name}</h3>
                <p>Batch : {stud.batch}</p>
                <p>Education : {stud.education}</p>
                <p>Gender : {stud.gender}</p>
                <p>Skills : {stud.skills}</p>
                <div className='card-btn-group'>
                 <button onClick={()=>navigate(`/Editstudents/${stud.id}`)}>Edit</button>
                 <button onClick={()=>deleteStudent(stud.id)}>Delete</button>
                </div></Paper></Box>
            </div>
         ))}
         
        </div> 
        
        </Base>
    );
  }
export default Students





