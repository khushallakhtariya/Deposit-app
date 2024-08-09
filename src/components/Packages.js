import React from "react";
import "../style/Packages.css";

function Packages() {
  return (
    <div className="packages-container">
      <div className="packages-content">
        <p>Service Plans</p>
        <button className="contact-support-button">
          <i className="fa-regular fa-address-book btn-icon"></i>
          Contact Support
        </button>
      </div>
      <div className="packages-plan">
        <button>Choose a plan</button>
        <button>Subscription Plan</button>
      </div>
      <hr />
      <div className="plans-container">
        <div className="plan-card">
          <h2 className="plan-title">FEATURED PROJECTS</h2>
          <div className="plan-icon">
            {<i class="fa-solid fa-house-chimney"></i>}
          </div>
          <h3 className="plan-price">$65/mo</h3>
          <p className="plan-price-details">$702 per year (-10%)</p>
          <ul className="plan-features">
            <li className="feature-item">Fixed slot on homepage</li>
            <li className="feature-item">Wider accessibility</li>
            <li className="feature-item">City wide visibility</li>
          </ul>
          <button className="plan-button">Activate</button>
        </div>
        <div className="hplan-card">
          <h2 className="hplan-title">SEED PROJECTS</h2>
          <div className="hplan-icon">{<i class="fa-solid fa-house"></i>}</div>
          <h3 className="hplan-price">$85/mo</h3>
          <p className="hplan-price-details">$900 per year (101)</p>
          <ul className="hplan-features">
            <li className="hfeature-item">Promoted Listings</li>
            <li className="hfeature-item">Better quality of leads</li>
            <li className="hfeature-item">Targeted marketing of listings</li>
          </ul>
          <div className="button-container">
            <button className="get-started">Get Started!</button>
            <span className="recommended">RECOMMENDED</span>
          </div>
          <div className="kplan-card">
            <h2 className="kplan-title">BILLBOARD PROJECTS</h2>
            <div className="kplan-icon">
              {<i class="fa-solid fa-house-user"></i>}
            </div>
            <h3 className="kplan-price">$115/mo</h3>
            <p className="kplan-price-details">$1200 per year (12)</p>
            <ul className="kplan-features">
              <li className="kfeature-item">Locality level brand promotion</li>
              <li className="kfeature-item">Dedicated space on results page</li>
              <li className="kfeature-item">Enhanced visibility</li>
            </ul>
            <button className="kplan-button">Get Started!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
