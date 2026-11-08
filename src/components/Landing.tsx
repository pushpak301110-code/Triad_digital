import "./styles/Landing.css";
import { FaCode, FaVideo, FaPalette } from "react-icons/fa6";

interface OrbMember {
  id: string;
  name: string;
  role: string;
  color: string;
  glowColor: string;
  glassColor: string;
  scrollTarget: string;
  icon: typeof FaCode;
}

const orbMembers: OrbMember[] = [
  {
    id: "pushpak",
    name: "Pushpak",
    role: "Web Dev & Automation",
    color: "#00f3ff",
    glowColor: "rgba(0, 243, 255, 0.55)",
    glassColor: "rgba(0, 243, 255, 0.12)",
    scrollTarget: "#whatwedo",
    icon: FaCode,
  },
  {
    id: "tanay",
    name: "Tanay",
    role: "Video Editing",
    color: "#b026ff",
    glowColor: "rgba(176, 38, 255, 0.55)",
    glassColor: "rgba(176, 38, 255, 0.12)",
    scrollTarget: "#whatwedo",
    icon: FaVideo,
  },
  {
    id: "devang",
    name: "Devang",
    role: "Logo & Digital Images",
    color: "#ff007f",
    glowColor: "rgba(255, 0, 127, 0.55)",
    glassColor: "rgba(255, 0, 127, 0.12)",
    scrollTarget: "#whatwedo",
    icon: FaPalette,
  },
];

const Landing = () => {
  const handleOrbClick = (target: string) => {
    const el = document.querySelector(target);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="landing-section" id="landingDiv">
      {/* Ambient background glows */}
      <div className="trio-ambient-glow trio-glow-cyan"></div>
      <div className="trio-ambient-glow trio-glow-purple"></div>
      <div className="trio-ambient-glow trio-glow-pink"></div>

      <div className="landing-container">
        {/* Studio Name & Tagline */}
        <div className="landing-intro">
          <div className="trio-eyebrow-label">GOA, INDIA</div>
          <h1 className="cyber-heading-glitch">
            TRIAD <span className="trio-title-gradient">DIGITAL</span>
          </h1>
          <h2 className="trio-tagline">DIGITAL CREATORS</h2>
          <p className="trio-hero-desc">
            Three specialists. One studio. We help Goa businesses get more
            customers online with websites, WhatsApp automation, video editing,
            and design.
          </p>
        </div>

        {/* Three Glass Orbs with Soft Neon Glow */}
        <div className="trio-orbs-row">
          {orbMembers.map((member) => {
            const IconComp = member.icon;
            return (
              <button
                key={member.id}
                className="trio-orb"
                style={
                  {
                    "--orb-color": member.color,
                    "--orb-glow": member.glowColor,
                    "--orb-glass": member.glassColor,
                  } as React.CSSProperties
                }
                onClick={() => handleOrbClick(member.scrollTarget)}
                aria-label={`See ${member.name}'s work — ${member.role}`}
              >
                {/* Glass sphere face */}
                <div className="trio-orb-sphere">
                  <div className="trio-orb-shine"></div>
                  <div className="trio-orb-icon">
                    <IconComp />
                  </div>
                </div>

                {/* Label below the orb */}
                <div className="trio-orb-label">
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Scroll hint */}
        <p className="trio-orb-hint">Tap an orb to explore our work</p>
      </div>
    </div>
  );
};

export default Landing;
