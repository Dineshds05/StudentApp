import React, { useState } from "react";
import Base from "../Base/Base";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

export const studentvalidationschema = yup.object({
  name : yup.string().required("Please fill the name"),
  batch : yup.string().required("Fill the batch").min(5,"minimum 5 required"),
  education : yup.string().required("Fill the education details"),
  gender : yup.string().required("Please specify the gender"),
  skills : yup.string().required("Fill the skills")
})


function AddStudent({student, setStudent}) {
  const {values, 
    handleChange, 
    handleSubmit, 
    handleBlur, 
    errors, 
    touched} = useFormik({
    initialValues : {
          name : "",
          batch : "",
          education : "",
          gender : "",
          skills : ""
   },
   validationSchema : studentvalidationschema,
   onSubmit : (newStudent)=>{
    handleAddStudents(newStudent)
   
   }
  })
    
    const navigate = useNavigate()

     const handleAddStudents = async (newStudent) =>{
 
      try {
   
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
        <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <h3>Add Students</h3>
        <input
        placeholder='Enter Student Name'
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        name="name"
        />
        {touched.name && errors.name ? <div style={{color:"crimson"}}>{errors.name}</div> : ""}
        <input
        placeholder='Enter Student Batch'
        type="text"
        value={values.batch}
        onChange={handleChange}
        onBlur={handleBlur}
        name="batch"
        />
       {touched.batch && errors.batch ? <div style={{color:"crimson"}}>{errors.batch}</div> : ""}
        <input
        placeholder='Enter Student Education'
        type="text"
        value={values.education}
        onChange={handleChange}
        onBlur={handleBlur}
        name="education"
        />
       {touched.batch && errors.education ? <div style={{color:"crimson"}}>{errors.education}</div> : ""}
        <input
        placeholder='Enter Student Gender'
        type="text"
        value={values.gender}
        onChange={handleChange}
        onBlur={handleBlur}
        name="gender"
        />
       {touched.gender && errors.gender ? <div style={{color:"crimson"}}>{errors.gender}</div> : ""}
        <input
        placeholder='Enter Student Skills'
        type="text"
        value={values.skills}
        onChange={handleChange}
        onBlur={handleBlur}
        name="skills"
        />
        {touched.skills && errors.skills ? <div style={{color:"crimson"}}>{errors.skills}</div> : ""}
        <br/>
        <button type="submit" variant="contained">
            AddStudents
        </button>
      </div></form></Base>
    );
  }
  
  export default AddStudent;