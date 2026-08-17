import React from 'react';
import aboutImg from '../assets/about-img.jpg';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-content">
        <div className="about-image-wrapper">
          <img src={aboutImg} alt="About our coffee shop" />
        </div>
        <div className="about-details">
          <h2 className="section-title">ABOUT US</h2>
          <p className="text">
            At Coffee House in PhnomPenh, Cambodia, we pride ourselves on
            being a go-to destination for coffee lovers and conversation seekers
            alike. We're dedicated to providing an exceptional coffee experience
            in a cozy and inviting atmosphere, where guests can relax, unwind,
            and enjoy their time in comfort.
          </p>
          <div className="social-link-list">
            <a href="#" className="social-link" aria-label="Facebook">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#" className="social-link" aria-label="TikTok">
              <i className="fa-brands fa-tiktok" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}