import React, { useState } from "react";
import styles from "./Spa.module.css";

import aromatherapyImg from"../assets/brain.jpg";
import facialImg from "../assets/face.jpg";
import bodyImg from "../assets/body.jpg";

const spaServices = [
  {
    title: "Aromatherapy Massage",
    subtitle: "Aromatherapy Massage",
    description:
      "A deeply relaxing treatment utilizing custom-blended essential oils and intuitive techniques to soothe muscles and calm the mind.",
    details:
      "This massage helps relieve stress, improve mood, and promote overall well-being through the use of natural essential oils and soothing massage techniques.",
    image: aromatherapyImg,
  },
  {
    title: "Signature Facial",
    subtitle: "The Golden Facial",
    description:
      "Our exclusive 90-minute facial using 24k gold extracts to rejuvenate, hydrate, and brighten the complexion for a radiant glow.",
    details:
      "Using natural gold-infused products, this treatment boosts skin elasticity and radiance while promoting deep hydration and rejuvenation.",
    image: facialImg,
  },
  {
    title: "Body Treatment",
    subtitle: "Detoxifying Body Ritual",
    description:
      "A full-body exfoliation followed by a warm mineral mud wrap, designed to purify the skin and boost  of blood circulation in the body.",
    details:
      "This ritual detoxifies your skin, removes dead cells, and nourishes your body with essential minerals for a refreshed and glowing appearance.",
    image: bodyImg,
  },
];

const Spa = () => {
  const [flipped, setFlipped] = useState(Array(spaServices.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section className={styles.spaSection}>
      <h2 className={styles.sectionTitle}>Signature Spa Services</h2>
      <div className={styles.underline}></div>

      <div className={styles.cardContainer}>
        {spaServices.map((service, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              flipped[index] ? styles.flipped : ""
            }`}
          >
            <div className={styles.cardInner}>
              {/* ===== FRONT ===== */}
              <div className={styles.cardFront}>
                <div
                  className={styles.cardHeader}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className={styles.overlay}>
                    <h3>{service.title}</h3>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h4>{service.subtitle}</h4>
                  <p>{service.description}</p>
                  <button
                    className={styles.learnMore}
                    onClick={() => handleFlip(index)}
                  >
                    Learn More →
                  </button>
                </div>
              </div>

              {/* ===== BACK ===== */}
              <div className={styles.cardBack}>
                <h3>{service.title}</h3>
                <p>{service.details}</p>
                <button
                  className={styles.backButton}
                  onClick={() => handleFlip(index)}
                >
                  ← Back
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spa;
