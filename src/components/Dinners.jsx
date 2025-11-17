import React from "react";
import styles from "./Dinners.module.css";
import tableImg from "../assets/table.jpg";
import rooftopImg from "../assets/rooftop.jpg";
import cafeImg from "../assets/cafe.jpg";

const Dinners = () => {
  const venues = [
    {
      id: 1,
      title: "Fine Dining",
      subtitle: "The Gold Leaf",
      description:
        "Modern European cuisine with a focus on seasonal, local ingredients.",
      tag: "Formal Attire",
      button: "View Menu",
      image: tableImg,
      bgColor: "#b8945e", 
    },
    {
      id: 2,
      title: "Rooftop Bar",
      subtitle: "Sky Bar 360",
      description:
        "Handcrafted cocktails and light bites with panoramic city views.",
      tag: "Casual Luxury",
      button: "Explore Drinks",
      image: rooftopImg,
      bgColor: "#3f2e25", 
    },
    {
      id: 3,
      title: "Artisan Cafe",
      subtitle: "The Artisan Café",
      description:
        "Freshly brewed coffee, pastries, and healthy all-day brunch options.",
      tag: "All-Day Dining",
      button: "See Hours",
      image: cafeImg,
      bgColor: "#f4ede4", 
    },
  ];

  return (
    <section className={styles.dinnersSection}>
      <h2 className={styles.sectionTitle}>Our Culinary Venues</h2>

      <div className={styles.cardContainer}>
        {venues.map((venue) => (
          <div key={venue.id} className={styles.card}>
            {/* Header with background color and image */}
            <div
              className={styles.cardHeader}
              style={{ backgroundColor: venue.bgColor }}
            >
              <h3 className={styles.cardTitle}>{venue.title}</h3>
              <img
                src={venue.image}
                alt={venue.title}
                className={styles.cardImage}
              />
            </div>

            {/* Body */}
            <div className={styles.cardBody}>
              <h4 className={styles.cardSubtitle}>{venue.subtitle}</h4>
              <p className={styles.cardDescription}>{venue.description}</p>

              <div className={styles.cardFooter}>
                <span className={styles.tag}>{venue.tag}</span>
                <button className={styles.cardButton}>{venue.button}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dinners;
