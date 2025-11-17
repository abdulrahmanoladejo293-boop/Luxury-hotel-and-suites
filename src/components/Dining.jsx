import React from "react";
import styles from "./Dining.module.css";

import Dinners from "./Dinners";
import SecureTable from "./SecureTable";
import Footer from "./footer";

import diningImg from "../assets/dining.jpg"; // ✅ Correct Vite import

const Dining = () => {
  return (
    <>
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${diningImg})` }} // ✅ Correct Vite usage
      >
        <div className={styles.overlay}></div>

        <div className={styles.inner}>
          <h4 className={styles.kicker}>A CULINARY JOURNEY</h4>

          <h1 className={styles.headline}>
            <span className={styles.headlineLight}>Exceptional</span>
            <span className={styles.headlineStrong}> Dining</span>
          </h1>

          <p className={styles.lead}>
            From award-winning cuisine to bespoke cocktail experiences, indulge
            your senses in our collection of exquisite restaurants and bars.
          </p>
        </div>
      </section>

      <Dinners />
      <SecureTable />
      <Footer />
    </>
  );
};

export default Dining;
