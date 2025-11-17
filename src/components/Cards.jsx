import React from "react";
import styles from "./Cards.module.css"; // ✅ Import CSS module
import Footer from "./Footer";

const Cards = () => {
  const cardData = [
    { id: 1, image: "/suite/room1.jpg", title: "Executive Suite", description: "Enjoy top-tier comfort with elegant décor and city views.", price: "$350 / night" },
    { id: 2, image: "/suite/room2.jpg", title: "Deluxe Room", description: "Cozy luxury with a king-sized bed and warm lighting.", price: "$250 / night" },
    { id: 3, image: "/suite/room3.jpg", title: "Family Suite", description: "Spacious and perfect for families or small groups.", price: "$400 / night" },
    { id: 4, image: "/suite/room4.jpg", title: "Presidential Suite", description: "Unmatched luxury with private lounge and breathtaking views.", price: "$550 / night" },
    { id: 5, image: "/suite/room5.jpg", title: "Ocean View Room", description: "Wake up to the sound and sight of serene ocean waves.", price: "$300 / night" },
    { id: 6, image: "/suite/room6.jpg", title: "Classic Suite", description: "Modern design blended with timeless comfort.", price: "$270 / night" },
    { id: 7, image: "/suite/room7.jpg", title: "Garden Suite", description: "Peaceful stay surrounded by lush greenery.", price: "$320 / night" },
    { id: 8, image: "/suite/room8.jpg", title: "Business Suite", description: "Designed for productivity and relaxation.", price: "$280 / night" },
    { id: 9, image: "/suite/room9.jpg", title: "Couple’s Retreat", description: "A romantic escape with elegant touches.", price: "$310 / night" },
    { id: 10, image: "/suite/room10.jpg", title: "Skyline Room", description: "Panoramic views from our highest floors.", price: "$330 / night" },
    { id: 1, image: "/suite/room1.jpg", title: "Executive Suite", description: "A phenomenal comfort zone.", price: "$150 / night" },
    { id: 3, image: "/suite/room3.jpg", title: "Family Suite", description: "Spacious and perfect for freinds.", price: "$300 / night" },

  ];

  return (
    <>
      {/* Cards Section */}
      <div className={styles.cardsContainer}>
        <h2>Explore Our Rooms</h2>
        <div className={styles.cardsGrid}>
          {cardData.map((card) => (
            <div className={styles.card} key={card.id}>
              <div className={styles.cardInner}>
                {/* Front Side */}
                <div className={styles.cardFront}>
                  <img src={card.image} alt={card.title} loading="lazy" />
                  <div className={styles.cardContent}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className={styles.cardBack}>
                  <h3>{card.title}</h3>
                  <p className={styles.price}>{card.price}</p>
                  <button className={styles.bookBtn}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer outside the cards container */}
      <Footer />
    </>
  );
};

export default Cards;
