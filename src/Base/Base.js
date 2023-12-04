import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
function Base({Title, Description, children}) {
 const navigate = useNavigate()
    return (
      
        <div className="container">
        <header>
        <AppBar variant="outlined" position="static">
  <Toolbar variant="dense">
    <Typography variant="h5" edge="start" color="inherit" aria-label="menu" sx={{ mr: 85 }}>
    <div><b><i>STUDENT APP</i></b></div>
    </Typography>
    <Stack direction="row" spacing={2}>
    <Button variant="contained" onClick={()=>navigate("/")}>
    <Typography variant="h8" color="white" component="div" >
    Dashboard
    </Typography></Button>
    <Button variant="contained" onClick={()=>navigate("/students")}>
    <Typography variant="h8" color="white" component="div" >
    Students
    </Typography></Button>
    <Button variant="contained" onClick={()=>navigate("/Addstudents")}>
    <Typography variant="h8" color="white" component="div" >
    AddStudents
    </Typography></Button>
    </Stack>
  </Toolbar>
</AppBar>

</header>
<div className="main-container">
        <main>
            <h1>{Title}</h1>
            <h3>{Description}</h3>
            <div className="contents">
                {children}
            </div>
        </main>
      </div>
      </div>
    );
  }
export default Base