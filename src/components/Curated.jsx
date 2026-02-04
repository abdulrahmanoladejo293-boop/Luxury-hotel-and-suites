import React from "react";
import "./Curated.css";
import { FaUtensils, FaSpa, FaMapMarkedAlt } from "react-icons/fa";


const Curated = () => {
  return (
    <section className="curated">
      <p className="curated-subtitle">OUR OFFERINGS</p>
      <h2 className="curated-title">A World of Indulgence</h2>

      <div className="curated-cards">
        {[
          {
            icon: <FaUtensils />,
            title: "Michelin Dining",
            description:
              "Savor world-class cuisine crafted by celebrity chefs in our panoramic rooftop restaurant.",
          },
          {
            icon: <FaSpa />,
            title: "Holistic Spa",
            description:
              "Rejuvenate with bespoke treatments, thermal baths, and an infinity pool overlooking the city.",
          },
          {
            icon: <FaMapMarkedAlt />,
            title: "Exclusive Tours",
            description:
              "Discover hidden gems with our concierge-planned private city tours and guided experiences.",
          },
        ].map((item, index) => (
          <div className="curated-card" key={index}>
            <div className="curated-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Curated;
