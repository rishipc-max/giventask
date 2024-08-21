import React from "react";
import { KeyboardArrowRight } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import "./Services.css";

const NextBtn = ({ onClick, disabled }) => {

  const isMobile = useMediaQuery("(max-width:575px)");

  return (
    <div 
    className="hmmr"
    onClick={!disabled ? onClick : null}  
    style={{position: "absolute", 
      top:  isMobile ? "520px" :  "-45px", 
      right: isMobile ? "30%" :  "5px" ,  
      color: disabled ? "gray" : "blue", cursor: "pointer"}}
  >
    <p style={{fontWeight:'bold'}}>Next<KeyboardArrowRight /></p>
  </div>
  );
};

export default NextBtn;