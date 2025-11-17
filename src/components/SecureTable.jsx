import React from "react";
import styles from "./SecureTable.module.css";

const SecureTable = () => {
  return (
    <section className={styles.secureSection}>
      <h2 className={styles.title}>Secure Your Table</h2>
      <p className={styles.description}>
        Reservations are highly recommended for all dining venues, particularly for evening
        service at <strong>The Gold Leaf</strong>.
      </p>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Date & Time"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Reserve Now
        </button>
      </form>
    </section>
  );
};

export default SecureTable;
