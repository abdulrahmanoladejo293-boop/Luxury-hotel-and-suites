import React from "react";
import "./Room.css";

const Room = () => {
  return (
    <section className="room-section">
      <div className="room-left">
         <img src="/suite/hotel.jpg" alt="Executive Suite" className="room-image" />
      </div>

      <div className="room-right">
        <h2 className="room-title">Luxury Suites & Rooms</h2>
        <p className="room-text">
          Experience comfort and elegance in our tastefully designed rooms. 
          Each suite is furnished with modern amenities, plush bedding, 
          and stunning views to make your stay unforgettables.
        </p>

        <ul className="room-features">
          <li>• King-size bed with premium linens</li>
          <li>• Free high-speed Wi-Fi</li>
          <li>• Private balcony with city or garden view</li>
          <li>• 24-hour room service</li>
        </ul>

        <button className="room-btn">Book Your Stay</button>
      </div>
    </section>
  );
};

export default Room;
