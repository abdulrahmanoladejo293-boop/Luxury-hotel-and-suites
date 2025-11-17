import React, { useState } from "react";
import styles from "./Contact.module.css";
import bgImage from "../assets/Contact.jpg";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <div className={styles.contactPage}>
        {/* ===== Hero Section ===== */}
        <section
          className={styles.contactHero}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className={styles.overlay}>
            <h4 className={styles.kicker}>WE ARE HERE FOR YOU</h4>
            <h1 className={styles.headline}>Get In Touch</h1>
            <p className={styles.lead}>
              Whether you are planning your stay or need assistance during your visit,
              our dedicated team is ready to help.
            </p>
          </div>
        </section>

        {/* ===== Centered Contact Form Section ===== */}
        <section className={styles.contactSection}>
          <div className={styles.centerContainer}>
            <form
              onSubmit={handleSubmit}
              className={`${styles.formCard} ${styles.fadeIn}`}
            >
              <h2 className={styles.formTitle}>Send Us a Message</h2>

              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Regarding Reservation, Events, etc."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputGroup}>
                <label type="Text">Message</label>
                <textarea
                  name="message"
                  placeholder="How can we assist you?"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
