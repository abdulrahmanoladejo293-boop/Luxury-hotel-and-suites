import React from "react";
import "./button.css";

const Button = ({ type, text }) => {
  return (
    <button className={type === "dark" ? "btn-dark" : "btn-outline"}>
      {text}
    </button>
  );
};

export default Button;


