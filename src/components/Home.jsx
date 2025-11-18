import React from "react";
import Section from "../components/Section.jsx";
import GuestVoices from "../components/GuestVoices.jsx";
import Room from "../components/Room.jsx";
import Curated from "..components/Curated.jsx";
import Footer from "..components/Footer.jsx";
import HeroSection from "../components/HeroSection.jsx"


function App() {
  return (
  <div>
  <HeroSection />
  <Section />
  <GuestVoices /> 
  <Room />
  <Curated />
  <Footer/>
  </div>
  );
}

export default App;









