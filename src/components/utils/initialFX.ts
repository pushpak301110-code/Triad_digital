import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) {
    mainEl.classList.add("main-active");
  }

  gsap.to("body", {
    backgroundColor: "#040306",
    duration: 0.5,
    delay: 0.5,
  });

  // Animate hero title text
  const titleElements = document.querySelectorAll(".landing-intro h1, .trio-tagline");
  if (titleElements.length > 0) {
    try {
      const landingText = new SplitText(titleElements, {
        type: "chars,lines",
        linesClass: "split-line",
      });
      gsap.fromTo(
        landingText.chars,
        { opacity: 0, y: 50, filter: "blur(4px)" },
        {
          opacity: 1,
          duration: 1,
          filter: "blur(0px)",
          ease: "power3.out",
          y: 0,
          stagger: 0.02,
          delay: 0.2,
          clearProps: "all",
        }
      );
    } catch {
      gsap.fromTo(
        titleElements,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, clearProps: "all" }
      );
    }
  }

  // Fade in nav + social
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 0.08,
      delay: 0.1,
      clearProps: "opacity",
    }
  );

  // Animate hero description + eyebrow
  gsap.fromTo(
    [".trio-eyebrow-label", ".trio-hero-desc"],
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.4,
      clearProps: "all",
    }
  );

  // Animate the three glass orbs
  gsap.fromTo(
    ".trio-orb",
    { opacity: 0, y: 30, scale: 0.92 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.75,
      ease: "back.out(1.5)",
      stagger: 0.14,
      delay: 0.55,
      clearProps: "transform,opacity",
    }
  );
}
