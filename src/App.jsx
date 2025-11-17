import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Cards from "./components/Cards";
import Dining from "./components/Dining";
import Contact from "./components/Contact";
import Wellness from "./components/Wellness";
import Style from "./components/navbar.module.css";
import UsersPage from "./UsersPage";

function App() {
  return (
    <Router>
      {/* 🌿 Navbar Section */}
      <nav className={Style.navbar}>
        <div className={Style.logo}>
          Serenity <span className={Style.suite}>Suites</span>
        </div>

        <ul className={Style.nav}>
          <li>
            <Link to="/" className={Style.nav}>Home</Link>
          </li>
          <li>
            <Link to="/dining" className={Style.nav}>Dining</Link>
          </li>
          <li>
            <Link to="/cards" className={Style.nav}>Rooms & Suites</Link>
          </li>
          <li>
            <Link to="/Wellness" className={Style.nav}>Wellness</Link>
          </li>
          <li>
            <Link to="/contact" className={Style.nav}>Contact</Link>
          </li>
          <li>
            <Link to="/Form" className={Style.nav}>Register</Link>
          </li>
        </ul>
      </nav>

      {/* 🛣️ Routes Section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Wellness" element={<Wellness />} />
        <Route path="/form" element={<Form />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;