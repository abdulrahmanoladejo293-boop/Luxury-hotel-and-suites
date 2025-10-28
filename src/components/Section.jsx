import React from "react";
import "./Section.css";

const guestVoices = [
  {
    id: 1,
    stars: "★★★★★",
    quote:
      "The suite felt like a private apartment in the city. The attention to detail and personalized service were unmatched.",
    name: "Evelyn R.",
    location: "London",
  },
  {
    id: 2,
    stars: "★★★★★",
    quote:
      "From the concierge's warm greeting to the phenomenal spa experience, everything exceeded our high expectations.",
    name: "Marcus W.",
    location: "New York",
  },
  {
    id: 3,
    stars: "★★★★★",
    quote:
      "The ideal blend of modern comfort and classic sophistication. A truly restful stay with an incredible view.",
    name: "Jessica L.",
    location: "Paris",
  },
];

const Section = () => {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="section-subtitle">GUEST VOICES</p>
        <h2 className="section-title">Heard From Our Guests</h2>

        <div className="cards-container">
          {guestVoices.map((guest) => (
            <article key={guest.id} className="card" aria-label={`testimonial ${guest.id}`}>
              <div className="stars" aria-hidden>
                {guest.stars}
              </div>
              <p className="quote">“{guest.quote}”</p>
              <p className="guest">
                <strong>{guest.name}</strong>, {guest.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
