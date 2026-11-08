import "./styles/WhatIDo.css";
import { FaCode, FaWhatsapp, FaVideo, FaPalette, FaImage } from "react-icons/fa6";

const WhatIDo = () => {
  return (
    <div className="whatIDO" id="whatwedo">
      <div className="what-container section-container">
        {/* Section Header */}
        <div className="what-header-row">
          <span className="what-eyebrow">OUR SERVICES</span>
          <h2 className="title what-title cyber-heading-glitch">
            W<span className="hat-h2">HAT</span>{" "}
            <span>
              WE<span className="do-h2"> DO</span>
            </span>
          </h2>
          <p className="what-subtitle">
            Three people, five things we're good at. Here's what each of us
            works on.
          </p>
        </div>

        {/* Three-person grouped list with soft neon cyberpunk styling */}
        <div className="what-persons-grid">

          {/* Pushpak: Neon Cyan */}
          <div className="what-person-block" style={{ "--person-color": "#00f3ff" } as React.CSSProperties}>
            <div className="what-person-header">
              <div className="what-person-dot"></div>
              <h3>Pushpak</h3>
            </div>
            <ul className="what-service-list">
              <li>
                <span className="what-service-icon"><FaCode /></span>
                <div>
                  <strong>Website Development</strong>
                  <p>Fast, mobile-first websites for Goa businesses — built to rank on Google and turn visitors into customers.</p>
                </div>
              </li>
              <li>
                <span className="what-service-icon"><FaWhatsapp /></span>
                <div>
                  <strong>WhatsApp Automation</strong>
                  <p>Automated replies, booking flows, and catalog sharing — so your business responds to customers even when you're not available.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Tanay: Neon Purple */}
          <div className="what-person-block" style={{ "--person-color": "#b026ff" } as React.CSSProperties}>
            <div className="what-person-header">
              <div className="what-person-dot"></div>
              <h3>Tanay</h3>
            </div>
            <ul className="what-service-list">
              <li>
                <span className="what-service-icon"><FaVideo /></span>
                <div>
                  <strong>Video Editing</strong>
                  <p>Short-form reels, promotional videos, and brand films edited to hold attention and work on Instagram, YouTube, and WhatsApp.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Devang: Neon Pink */}
          <div className="what-person-block" style={{ "--person-color": "#ff007f" } as React.CSSProperties}>
            <div className="what-person-header">
              <div className="what-person-dot"></div>
              <h3>Devang</h3>
            </div>
            <ul className="what-service-list">
              <li>
                <span className="what-service-icon"><FaPalette /></span>
                <div>
                  <strong>Logo Design</strong>
                  <p>Clean, original logos and brand identities that look good on a shop sign, a phone screen, and everywhere in between.</p>
                </div>
              </li>
              <li>
                <span className="what-service-icon"><FaImage /></span>
                <div>
                  <strong>Digital Images &amp; Ad Creatives</strong>
                  <p>Social media graphics, promotional banners, and ad creatives designed to get clicks and stop the scroll.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
