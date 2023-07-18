import React from "react";
import { useNavigate } from "react-router-dom";
function Base({Title, Description, children}) {
 const navigate = useNavigate()
    return (
      <div className="main-container">
        <header>
        <nav>
          <div><b><i>STUDENT APP</i></b></div>
          <div className="nav-btn-group">
            <button onClick={()=>navigate("/")}>Dashboard</button>
            <button onClick={()=>navigate("/students")}>Students</button>
            <button onClick={()=>navigate("/Addstudents")}>AddStudents</button>
          </div>
          </nav>
        </header>
        <main>
            <h1>{Title}</h1>
            <h3>{Description}</h3>
            <div className="contents">
                {children}
            </div>
        </main>
      </div>
    );
  }
export default Base