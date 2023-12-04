import React from "react";
import Base from "../Base/Base";
import { dividerClasses } from "@mui/material";
function Dashboard(){
    return(
        <div>
        <Base
        Title={"Welcome to Student Application"}
        Description = {"This is a Student Data apptication"}
        >
        <h1>Please navigate to students app</h1>
        </Base>
        <div>
        <img src="https://t4.ftcdn.net/jpg/01/97/06/23/240_F_197062338_0f7bmlqLROMhOuGtPQTbs5DWyun5Egp5.jpg" alt="learning" className="image"></img></div></div>
    );
}
export default Dashboard;