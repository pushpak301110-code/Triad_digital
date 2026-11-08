import "./styles/WhyHireUs.css";
import {
  FaBoxOpen,
  FaClock,
  FaShieldHeart,
  FaCheck,
  FaWhatsapp,
} from "react-icons/fa6";

const pillars = [
  {
    id: "what-we-deliver",
    badge: "01 • OUTPUT & QUALITY",
    title: "What We Deliver",
    color: "#00f2fe",
    icon: FaBoxOpen,
    headline: "End-to-End Digital Solutions Built to Convert",
    points: [
      "High-speed, SEO-optimized business websites with modern aesthetics",
      "Automated WhatsApp booking & inquiry pipelines that work 24/7",
      "High-retention social media reels & promotional video edits",
      "Memorable vector logo suites and conversion-focused ad creatives",
      "Clean source files, full ownership & zero vendor lock-in",
    ],
    metric: "100%",
    metricLabel: "Custom & Bespoke Assets",
  },
  {
    id: "how-fast",
    badge: "02 • SPEED & EXECUTION",
    title: "How Fast We Deliver",
    color: "#f368e0",
    icon: FaClock,
    headline: "Agile Turnarounds Without Sacrificing Craftsmanship",
    points: [
      "24 to 48 Hours: Video edits, social reels & digital ad creatives",
      "3 to 5 Days: Logo design packages & WhatsApp chatbot funnels",
      "5 to 7 Days: Complete custom website launches",
      "Direct daily progress updates via private WhatsApp group",
      "Fast revisions so your campaigns launch on schedule",
    ],
    metric: "3-7 Days",
    metricLabel: "Average Project Delivery",
  },
  {
    id: "why-trust",
    badge: "03 • TRUST & RELIABILITY",
    title: "Why Clients Can Trust Us",
    color: "#ff9f43",
    icon: FaShieldHeart,
    headline: "Direct Creator Access & Transparent Partnership",
    points: [
      "Direct communication with Pushpak, Tanay & Devang (no middlemen)",
      "Clear milestone demos before final sign-off & payment",
      "Deep understanding of Goa's hospitality, retail & service ecosystem",
      "Transparent fixed-cost pricing with zero hidden agency fees",
      "Dedicated post-launch support and guidance",
    ],
    metric: "3-in-1",
    metricLabel: "Dedicated Specialists",
  },
];

const WhyHireUs = () => {
  return (
    <div className="why-hire-section section-container" id="whyhireus">
      <div className="why-hire-container">
        {/* Header */}
        <div className="why-hire-head">
          <div className="why-hire-badge">WHY Triad Digital</div>
          <h2 className="title why-hire-title">
            WHY <span>HIRE US</span>
          </h2>
          <p className="why-hire-subtitle">
            Three dedicated creators. One unified powerhouse. We replace slow
            agencies and fragmented freelancers with fast, high-impact results.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="why-hire-grid">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;

            return (
              <div
                key={pillar.id}
                className="why-pillar-card"
                style={
                  {
                    "--pillar-color": pillar.color,
                  } as React.CSSProperties
                }
              >
                <div className="why-card-glow"></div>
                <div className="why-pillar-top">
                  <div className="why-icon-wrap">
                    <IconComp />
                  </div>
                  <span className="why-pillar-badge">{pillar.badge}</span>
                </div>

                <h3 className="why-pillar-title">{pillar.title}</h3>
                <h4 className="why-pillar-headline">{pillar.headline}</h4>

                <ul className="why-pillar-points">
                  {pillar.points.map((pt, idx) => (
                    <li key={idx}>
                      <span className="why-check">
                        <FaCheck />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="why-pillar-footer">
                  <div className="why-metric-box">
                    <span className="why-metric-val">{pillar.metric}</span>
                    <span className="why-metric-label">
                      {pillar.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA Banner */}
        <div className="why-hire-cta-banner">
          <div className="why-cta-text">
            <h4>Ready to elevate your business in Goa?</h4>
            <p>
              Tell us about your project and get a custom proposal in under 2
              hours.
            </p>
          </div>
          <a
            href="mailto:triaddigital9@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="why-cta-btn"
          >
            <FaWhatsapp />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyHireUs;
