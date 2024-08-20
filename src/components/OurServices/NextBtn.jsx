import React from "react";
import { KeyboardArrowRight } from "@mui/icons-material";

const NextBtn = ({ onClick, isSelected }) => {

  return (
    <div 
    onClick={onClick} 
    style={{position: "absolute", top: "-40px", right: "5px",  color: isSelected ? "black" : "blue", cursor: "pointer"}}
  >
    <p>Next<KeyboardArrowRight /></p>
  </div>
  );
};

export default NextBtn;