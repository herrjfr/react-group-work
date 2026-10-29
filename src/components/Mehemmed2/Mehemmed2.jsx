import React from "react";
import "./Mehemmed2.css";

// İstədiyin şəkilləri bura import edə bilərsən (şəkil adlarını öz fayllarına uyğunlaşdırarsan)
import service1 from "../../assets/Amage.png";
import service2 from "../../assets/kebab-set-table 1.png";
import service3 from "../../assets/happy-man-wife-sunny-day 1.png";
import service4 from "../../assets/Mask group-2.png";

export default function Mehemmed2() {
  return (
    <section className="mehemmed2-container">
      <h2 className="section-title">We also offer unique services for your events</h2>

      <div className="services-grid">
        {/* 1. Caterings */}
        <div className="service-card">
          <div className="img-wrapper">
            <img src={service1} alt="Caterings" />
          </div>
          <h3>Caterings</h3>
          <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>

        {/* 2. Birthdays */}
        <div className="service-card">
          <div className="img-wrapper">
            <img src={service2} alt="Birthdays" />
          </div>
          <h3>Birthdays</h3>
          <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>

        {/* 3. Weddings */}
        <div className="service-card">
          <div className="img-wrapper">
            <img src={service3} alt="Weddings" />
          </div>
          <h3>Weddings</h3>
          <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>

        {/* 4. Events */}
        <div className="service-card">
          <div className="img-wrapper">
            <img src={service4} alt="Events" />
          </div>
          <h3>Events</h3>
          <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>
      </div>
    </section>
  );
}
