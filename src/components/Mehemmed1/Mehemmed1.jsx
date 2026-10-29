import React from "react";
import "./Mehemmed1.css";


import mainFoodImg from "../../assets/Amage.png";



export default function Mehemmed1() {
  return (
    <div className="mehemmed1-container">
      <div className="top-section">
        <div className="image-box-container">
          <img src={mainFoodImg} alt="Healthy Food" className="main-food-img" />
          
          {/* Üstə gələn tünd qutu */}
          <div className="visit-card">
            <h3>Come and visit us</h3>
            <ul>
              <li><span>📞</span> (414) 857 - 0107</li>
              <li><span>✉️</span> happytummy@restaurant.com</li>
              <li><span>📍</span> 837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</li>
            </ul>
          </div>
        </div>

        <div className="content-box">
          <h2>We provide healthy food for your family.</h2>
          <p className="main-desc">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
          </p>
          <p className="sub-desc">
            At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>
          <button className="more-btn">More About Us</button>
        </div>
      </div>
    </div>
  );
}
