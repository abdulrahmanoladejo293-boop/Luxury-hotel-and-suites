import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from "./Button";
import "./HeroSection.css";
import Suiteimage from "../images/suite.img.jpeg"

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
         <span className="experience">Experience</span>  <br />
          <span className="highlight">Timeless</span> <br />
          <span className="luxury">Luxury.</span>
        </h1>
        <p className="para">
          Indulge in our exquisite suites, where impeccable design meets
          panoramic city views. Your sanctuary above the skyline awaits.
        </p>
        <div className="buttons">
          <Button type="dark" text="Explore Suites" to="/Cards" />
          <Button type="outline" text="View Dining" to="/Dining" />
        </div>
      </div>
      <div className="img"><img src={Suiteimage} alt="" /></div>
    </section>
  );
};

export default HeroSection;
