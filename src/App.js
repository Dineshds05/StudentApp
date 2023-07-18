import { useEffect, useState } from 'react';
import './App.css';
import Students from './Components/Students';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import AddStudent from './Components/AddStudents';
import EditStudent from './Components/EditStudent';
import InvalidEndpoints from './Components/invalidEndpoits';
function App() {
  const [students, setStudents] = useState([]);
  useEffect(()=>{
   const getStudentsDetails = async()=>{
      let data;
      const res =await fetch(`https://646849c860c8cb9a2ca6b1ea.mockapi.io/students`,{
        method : "GET",
      });
      data = await res.json();
      setStudents(data)
   }
   getStudentsDetails()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element = {<Dashboard/>}/>
        <Route exact path='/students' element = {<Students
        students={students}
        setStudents={setStudents}
        />}/>
        <Route exact path='/Addstudents' element = {<AddStudent
         student = {students}
         setStudent = {setStudents}
        />}/>
        <Route exact path='/Editstudents/:id' element = {<EditStudent
         studentobj = {students}
         setstudents = {setStudents}
         />}/>
          <Route exact path='*' element = {<InvalidEndpoints/>}/>
        </Routes>
      
    </div>
    
  );
}

export default App;
