import React from "react";
import "./GuestVoices.css";

const guestPackages = [
  {
    id: 1,
    title: "The Romantic City Escape",
    price: "$1750",
    description:
      "Treat your loved one to a magical stay. Includes champagne on arrival, breakfast in bed, and a couple’s massage at our Holistic Spa.",
    features: [
      "Daily gourmet breakfast",
      "Late 2:00PM checkout",
      "60-minute couple’s massage",
    ],
    buttonText: "View Package Details",
  },
  {
    id: 2,
    title: "Executive Wellness Retreat",
    price: "$1599",
    description:
      "Combine productivity with relaxation. Get access to our executive lounge and complimentary daily yoga sessions to recharge.",
    features: [
      "1-hour personalized training session",
      "Premium Wi-Fi and printing services",
      "Access to the private Executive Lounge",
    ],
    buttonText: "Explore This Offer",
  },
];

const GuestVoices = () => {
  return (
    <section className="guestvoices">
      <h2 className="guestvoices-title">Curated Packages</h2>
      <div className="guestvoices-container">
        {guestPackages.map((pkg) => (
          <div key={pkg.id} className="guest-card">
            <h3>{pkg.title}</h3>
            <p className="price">Starting at {pkg.price} / night</p>
            <p className="desc">{pkg.description}</p>
            <ul>
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button>{pkg.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuestVoices;
