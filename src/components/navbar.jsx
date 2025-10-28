import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Serinity <span className="suite">Suites</span></div>
      
      <ul className="nav-links">
        <li>Rooms & Suites</li>
        <li>Dining</li>
        <li>Wellness</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      <button className="book-btn">Book Now</button>
    </nav>
  );
};

export default Navbar;
