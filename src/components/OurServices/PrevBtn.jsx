import { KeyboardArrowLeft } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import "./Services.css";
import React from "react";

const PrevBtn = ({ onClick, disabled  }) => {

  const isMobile = useMediaQuery("(max-width:575px)");

  return (
    <div 
    onClick={!disabled ? onClick : null}    
    style={{position: "absolute",
        top:  isMobile ? "520px" :  "-45px",
        right: isMobile ? "50%" :  "90px" ,
        // right: "90px", 
        cursor: "pointer", color: disabled ? "gray" : "blue", }}
  >
    <p className="hmml" style={{fontWeight:'bold'}}><KeyboardArrowLeft />Prev</p>
  </div>
  );
};

export default PrevBtn;