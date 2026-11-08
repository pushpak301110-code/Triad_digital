import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (typeof window === "undefined" || window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = "top 85%";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      para.split?.revert();
    }

    try {
      para.split = new SplitText(para, {
        type: "lines,words",
        linesClass: "split-line",
      });

      para.anim = gsap.fromTo(
        para.split.words,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: para,
            start: TriggerStart,
            once: true,
          },
          duration: 0.7,
          ease: "power2.out",
          y: 0,
          stagger: 0.012,
        }
      );
    } catch {
      gsap.to(para, { opacity: 1, duration: 0.2 });
    }
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.revert();
    }
    try {
      title.split = new SplitText(title, {
        type: "chars,lines",
        linesClass: "split-line",
      });
      title.anim = gsap.fromTo(
        title.split.chars,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: title,
            start: TriggerStart,
            once: true,
          },
          duration: 0.6,
          ease: "power2.out",
          y: 0,
          stagger: 0.015,
        }
      );
    } catch {
      gsap.to(title, { opacity: 1, duration: 0.2 });
    }
  });
}
