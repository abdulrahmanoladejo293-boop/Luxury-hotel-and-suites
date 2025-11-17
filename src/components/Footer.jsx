import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>
          Your <span>Exclusive Escape Awaits</span>
        </h2>
        <p>
          Secure your reservation today and begin your journey into unmatched serenity and style.
        </p>
        <button className="footer-btn">BOOK YOUR STAY NOW</button>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-col brand">
          <h3>
            Serenity <span>Suites</span>
          </h3>
          <p>
            Where impeccable design meets personalized service. Your sanctuary in the city.
          </p>
          <div className="footer-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-tripadvisor"></i>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Rooms & Reservations </li>
            <li>Fine Dining</li>
            <li>Spa & Wellness</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            Address: 100 Serenity Plaza, Metropolis, CA 90210 <br />
            Phone: +1 (555) 123-4567 <br />
            Email: info@serenitysuites.com
          </p>
          <button className="contact-btn">Contact Us</button>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Subscribe for exclusive offers and updates on new amenities.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-end">
        <p>© 2025 Serenity Suites. All rights reserved. | Designed for Luxury.</p>
      </div>
    </footer>
  );
};

export default Footer;
