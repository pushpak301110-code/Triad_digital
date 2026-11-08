import { useEffect, useRef, useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projectPlaceholders = [
  {
    num: "01",
    title: "Coastal Resort & Villa Web Experience",
    category: "Website Development",
    tools: "Next.js, TypeScript, Three.js 3D, Tailwind",
  },
  {
    num: "02",
    title: "Cafe & Beach Club WhatsApp Bot",
    category: "WhatsApp Automation",
    tools: "WhatsApp Cloud API, Webhooks, Google Sheets CRM",
  },
  {
    num: "03",
    title: "Cinematic Goa Brand Film & Viral Reels",
    category: "Video Editing",
    tools: "Premiere Pro, After Effects, Sound Design",
  },
  {
    num: "04",
    title: "Artisanal Bakery & Roast Identity",
    category: "Logo Design",
    tools: "Vector Suite, Brand Guidelines, Typography",
  },
  {
    num: "05",
    title: "Nightlife & Event Campaign Visuals",
    category: "Digital Images",
    tools: "Photoshop, Social Ads, Display Banners",
  },
  {
    num: "06",
    title: "Full-Stack Hospitality Booking System",
    category: "Web & Automation Suite",
    tools: "React, Node.js, WhatsApp Engine, Analytics",
  },
];

const Work = () => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.innerWidth > 1024
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 1024;
      setIsDesktop(desktop);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP horizontal pinning ONLY on desktop
  useGSAP(
    () => {
      if (!isDesktop) return;

      const section = sectionRef.current;
      const flexTrack = scrollContainerRef.current;
      const container = section?.querySelector(".work-container") as HTMLElement;

      if (!section || !flexTrack || !container) return;

      const calculateDistance = () => {
        const fullTrackWidth = flexTrack.scrollWidth;
        const visibleContainerWidth = container.clientWidth;
        // Total horizontal distance to reveal card 6 with clean right padding
        return Math.max(0, fullTrackWidth - visibleContainerWidth + 48);
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${calculateDistance()}`,
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "workPin",
        },
      });

      timeline.to(flexTrack, {
        x: () => -calculateDistance(),
        ease: "none",
      });

      return () => {
        timeline.kill();
        ScrollTrigger.getById("workPin")?.kill();
      };
    },
    { dependencies: [isDesktop], scope: sectionRef }
  );

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`work-section ${!isDesktop ? "work-section-mobile" : ""}`}
      id="work"
    >
      <div className="work-container section-container">
        <div className="work-header-row">
          <div>
            <div className="work-badge">PORTFOLIO SHOWCASE</div>
            <h2 className="cyber-heading-glitch">
              OUR <span>WORK</span>
            </h2>
          </div>
          {!isDesktop && (
            <div className="work-mobile-nav-arrows">
              <button
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="work-arrow-btn"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll right"
                className="work-arrow-btn"
              >
                <FaArrowRight />
              </button>
            </div>
          )}
        </div>

        <div
          className={`work-flex ${!isDesktop ? "work-flex-mobile" : ""}`}
          ref={scrollContainerRef}
        >
          {projectPlaceholders.map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{item.num}</h3>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Tools & Features</h4>
                <p>{item.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
