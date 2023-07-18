import React, { useState } from "react";
import Base from "../Base/Base";
import { useNavigate } from "react-router-dom";
function AddStudent({student, setStudent}) 
    {
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [education, setEducation] = useState("")
    const [gender, setGender] = useState("")
    const [skills, setSkills] = useState("")
    const navigate = useNavigate()

     const handleAddStudents =async()=>{
      try {
        const newStudent ={
          name,
          batch,
          education,
          gender,
          skills
  } 
        const res =await fetch(`https://646849c860c8cb9a2ca6b1ea.mockapi.io/students`,{
          method : "POST",
          body : JSON.stringify(newStudent),
          headers :{
             "Content-Type":"application/json"
          },
        })
        const data =await res.json();
          // console.log(newStudent) 
          setStudent([...student, data])
           navigate("/students")
      } catch (error) {
        console.log(error);
      }  
     }
    return (
      <Base
      Title = {'ADD STUDENTS'}
      Description={"Fill the form to add new students"}>
      <div className='form-group'>
        <h3>Add Students</h3>
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
        <button onClick={handleAddStudents}>
            AddStudents
        </button>
      </div></Base>
    );
  }
  
  export default AddStudent;