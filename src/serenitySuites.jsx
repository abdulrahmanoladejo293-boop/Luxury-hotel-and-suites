import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import "./SerenitySuites.css";
import Button from "./components/button";

const SerenitySuites = () => {
  return (
    <div className="serenity-container">
      <Navbar />
      <HeroSection />
      <Button/>
    </div>
  );
};

export default SerenitySuites;

