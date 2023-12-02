import React, { useEffect } from "react";
import { useState } from "react";
import Base from "../Base/Base";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent({studentobj,setstudents}) 
    {
    const navigate = useNavigate();
    const {id} = useParams();
    const [idx, setIDX] = useState("")
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [education, setEducation] = useState("")
    const [gender, setGender] = useState("")
    const [skills, setSkills] = useState("")
    
    useEffect(()=>{
     const studentData = studentobj.find(stud=>stud.id === id);
     if(studentData){
      setIDX(studentData.id)
      setName(studentData.name)
      setBatch(studentData.batch)
      setEducation(studentData.education)
      setGender(studentData.gender)
      setSkills(studentData.skills)
     }
    }, [id, studentobj])

     const UpdateStudents = async() =>{
      try {
        const updatestudent = {
          id,
          name,
          batch,
          education,
          gender,
          skills
         }
          const res = await fetch(`https://656af622dac3630cf727805f.mockapi.io/students/${id}`,{
            method : "PUT",
            body : JSON.stringify(updatestudent),
            headers : {
              "Content-Type" : "application/json",
            }
          });
          const data = await res.json();
     

        const studIndex = studentobj.findIndex((stud)=>stud.id === id)
      // console.log(studIndex)
   
      
            studentobj[studIndex] = updatestudent
            setstudents([...studentobj])
            navigate("/students")
      } catch (error) {
        console.log(error);
      }
      
     }

    return (
      <Base
      Title={"Edit Students"}
      Description={"To Edit the students Data"}
      >
      <div className='form1-group'>
        <h3>Update Students</h3>
        
        <input
        placeholder='Enter Student ID'
        type="number"
        value={idx}
        onChange={(e)=>setIDX(e.target.value)}
        />

        <input
        placeholder='Enter Student Name'
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <input
        placeholder='Enter Student Batch'
        type="text"
        value={batch}
        onChange={(e)=>setBatch(e.target.value)}
        />

        <input
        placeholder='Enter Student Education'
        type="text"
        value={education}
        onChange={(e)=>setEducation(e.target.value)}
        />

        <input
        placeholder='Enter Student Gender'
        type="text"
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
        />

        <input
        placeholder='Enter Student Skills'
        type="text"
        value={skills}
        onChange={(e)=>setSkills(e.target.value)}
        />
        <br/>
        <button onClick={UpdateStudents}>
            UpdateStudents
        </button>
      </div></Base>
    );
  }
  
  export default EditStudent;
