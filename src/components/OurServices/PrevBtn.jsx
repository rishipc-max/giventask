import { KeyboardArrowLeft } from "@mui/icons-material";
import React from "react";

const PrevBtn = ({ onClick, isSelected }) => {

  return (
    <div 
    onClick={onClick} 
    style={{position: "absolute", top: "-40px", right: "90px", cursor: "pointer", color: isSelected ? "blue" : "black"}}
  >
    <p><KeyboardArrowLeft />Prev</p>
  </div>
  );
};

export default PrevBtn;