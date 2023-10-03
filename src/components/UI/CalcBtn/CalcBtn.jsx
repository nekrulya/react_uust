import React from "react";
import cl from "./CalcBtn.module.css";

const CalcBtn = ({ value, style, onClick }) => {
  return (
    <div className={cl.CalcBtn} style={style} onClick={onClick}>
      {value}
    </div>
  );
};

export default CalcBtn;
