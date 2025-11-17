import React from "react";
import styles from "./FitnessCenter.module.css";
import gymImage from "../assets/gym.jpg"; // 🖼️ add your image in /assets

const FitnessCenter = () => {
  return (
    <section className={styles.fitnessSection}>
      <div className={styles.container}>
        {/* Left side — Gym Image */}
        <div className={styles.imageWrapper}>
          <img src={gymImage} alt="Luxury Gym" className={styles.gymImage} />
          <div className={styles.imageOverlay}>
            <h2 className={styles.overlayText}>Luxury Gym</h2>
          </div>
        </div>

        {/* Right side — Text Content */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>State-of-the-Art Fitness Center</h2>
          <hr className={styles.divider} />
          <p className={styles.description}>
            Maintain your routine in our cutting-edge fitness studio. Featuring the
            latest cardio and strength equipment from TechnoGym, our center is
            available 24 hours a day for your convenience.
          </p>
          <ul className={styles.features}>
            <li>TechnoGym Equipment (Cardio & Strength)</li>
            <li>Private Yoga & Pilates Studio</li>
            <li>Complimentary Water and Towel Service</li>
            <li>Certified Personal Trainers (by appointment)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FitnessCenter;
