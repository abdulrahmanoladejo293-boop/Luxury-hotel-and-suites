import React from "react";
import styles from "./Wellness.module.css";
import bgImage from "../assets/spa.jpg"; 
import Spa from "./Spa";
import FitnessCenter from "./FitnessCenter";
import Footer from "./Footer";

const Wellness = () => {
  return (
    <>
      <section
        className={styles.wellnessHero}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.overlay}>
          <p className={styles.kicker}>A HAVEN OF TRANQUILITY</p>
          <h1 className={styles.title}>The Wellness Spa</h1>
          <h2 className={styles.subtitle}>The Serenity Sanctuary</h2>
          <p className={styles.description}>
            Indulge your senses and restore balance with treatments inspired by ancient healing rituals.
          </p>
          <button className={styles.ctaButton}>Explore Treatments</button>
        </div>
      </section>
        <Spa />
        <FitnessCenter />

      <Footer />
    </>
  );
};

export default Wellness;
