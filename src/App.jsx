import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Style from "./components/navbar.module.css";
import Home from "./components/Home";
import Form from "./components/Form";
import Cards from "./components/Cards"; // 👈 we'll add this new page later

function App() {
  return (
    <Router>
      {/* ✅ Navbar Section */}
      <nav className={Style.navbar}>
        <div className={Style.logo}>
          Serenity <span className={Style.suite}>Suites</span>
        </div>

        <ul className={Style.nav}>
          <li>
            <Link to="/" className={Style.nav}>Home</Link>
          </li>
          <li>
            <Link to="/#" className={Style.nav}>Dining</Link>
          </li>
          <li>
            <Link to="/cards" className={Style.nav}>Rooms & Suites</Link>
          </li>
          <li>
            <Link to="/#" className={Style.nav}>Gallery</Link>
          </li>
          <li>
            <Link to="/#" className={Style.nav}>Contact</Link>
          </li>
          <li>
            <Link to="/form" className={Style.nav}>Register</Link>
          </li>
        </ul>
      </nav>

      {/* ✅ Routes Section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/cards" element={<Cards />} /> {/* 👈 for your card page */}
      </Routes>
    </Router>
  );
}

export default App;









