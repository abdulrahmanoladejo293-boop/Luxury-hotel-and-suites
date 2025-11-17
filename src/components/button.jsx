import React from "react";
import { useNavigate } from "react-router-dom";
import "./button.css";

const Button = ({ type, text, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to); // navigate only if `to` prop exists
  };

  return (
    <button
      className={type === "dark" ? "btn-dark" : "btn-outline"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
