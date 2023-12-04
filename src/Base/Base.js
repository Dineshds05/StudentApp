import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
function Base({Title, Description, children}) {
 const navigate = useNavigate()
    return (
        <div className="container">
        <header>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
    <Typography variant="h6" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
     STUDENT APP
    </Typography>
    <Stack direction="row" spacing={1}>
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
</Box>
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