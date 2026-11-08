import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-badge">GET IN TOUCH</div>
        <h3 className="title contact-title cyber-heading-glitch">
          LET'S BUILD SOMETHING <span>TOGETHER</span>
        </h3>
        <p className="contact-intro-p">
          Have a project in mind? Email us at triaddigital9@gmail.com — we reply fast.
        </p>

        {/* Big Email CTA Card */}
        <div className="contact-whatsapp-hero-card">
          <div className="contact-wa-left">
            <div className="contact-wa-pulse-dot"></div>
            <div>
              <h4>Fastest Way to Reach Us</h4>
              <p>Send an email directly to our team</p>
            </div>
          </div>
          <a
            href="mailto:triaddigital9@gmail.com"
            className="contact-wa-big-btn"
            data-cursor="disable"
          >
            <span>Email triaddigital9@gmail.com</span>
            <MdArrowOutward />
          </a>
        </div>

        {/* Individual specialist chips */}
        <div className="contact-members-wa-row">
          <span className="contact-members-label">Our Specialists:</span>
          <div className="contact-members-chips">
            <a
              href="mailto:triaddigital9@gmail.com?subject=Inquiry%20for%20Pushpak%20(Web%20%26%20Automation)"
              className="contact-member-chip"
              style={{ "--chip-color": "#00f3ff" } as React.CSSProperties}
            >
              <span>Pushpak — Web &amp; Automation</span>
            </a>
            <a
              href="mailto:triaddigital9@gmail.com?subject=Inquiry%20for%20Tanay%20(Video%20Editing)"
              className="contact-member-chip"
              style={{ "--chip-color": "#b026ff" } as React.CSSProperties}
            >
              <span>Tanay — Video Editing</span>
            </a>
            <a
              href="mailto:triaddigital9@gmail.com?subject=Inquiry%20for%20Devang%20(Logo%20%26%20Visuals)"
              className="contact-member-chip"
              style={{ "--chip-color": "#ff007f" } as React.CSSProperties}
            >
              <span>Devang — Logo &amp; Visuals</span>
            </a>
          </div>
        </div>

        {/* Footer row */}
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:triaddigital9@gmail.com" data-cursor="disable">
                triaddigital9@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-box">
            <h4>Follow Us</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <FaInstagram /> Instagram <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              TRIAD DIGITAL <br />
              <span>Digital Creators</span>
            </h2>
            <p className="contact-tagline-sub">
              Pushpak • Tanay • Devang <br />
              Goa, India
            </p>
            <h5>
              <MdCopyright /> {new Date().getFullYear()} Triad Digital. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
