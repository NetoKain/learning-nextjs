import React, { useEffect, useState } from "react";

function ButtonCustom({ children, color, text, onClick, set, count }) {

  useEffect(()=>{
    console.log(count)
    // set(prev => count + 1)
  },[onClick])

  return (
    <button
      onClick={onClick}
      style={{ background: color, border: "1px solid #fff" }}
    >
      {text} {children}
    </button>
  );
}

export default ButtonCustom;
