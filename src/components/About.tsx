import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section section-container" id="about">
      <div className="about-content-wrap about-me">
        <span className="about-eyebrow">ABOUT US</span>
        <h3 className="title cyber-heading-glitch">We are Triad Digital.</h3>
        <p className="para about-main-p">
          We are a small team based in Goa — Pushpak, Tanay, and Devang. We
          help local businesses get more customers online.
        </p>
        <p className="about-secondary-p">
          Pushpak builds websites and sets up WhatsApp automations so your
          business can take bookings and answer questions around the clock.
          Tanay edits videos and reels that actually get watched. Devang
          designs logos and marketing visuals that make people stop scrolling.
        </p>
        <p className="about-secondary-p">
          We work directly with you — no account managers, no outsourcing. If
          you run a restaurant, resort, boutique, or any local business in
          Goa, we know what it takes to reach your customers online.
        </p>

        <div className="about-highlights-grid">
          <div className="about-highlight-card" style={{ "--card-accent": "#00f3ff" } as React.CSSProperties}>
            <div className="about-card-num">01</div>
            <h4>Pushpak</h4>
            <p>Websites &amp; WhatsApp automation</p>
          </div>
          <div className="about-highlight-card" style={{ "--card-accent": "#b026ff" } as React.CSSProperties}>
            <div className="about-card-num">02</div>
            <h4>Tanay</h4>
            <p>Video editing &amp; reels</p>
          </div>
          <div className="about-highlight-card" style={{ "--card-accent": "#ff007f" } as React.CSSProperties}>
            <div className="about-card-num">03</div>
            <h4>Devang</h4>
            <p>Logo design &amp; digital images</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
