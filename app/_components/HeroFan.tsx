"use client";

import { useRef, useEffect } from "react";
import ImageSlot from "./ImageSlot";

const blades = [
  {
    rot: -44,
    bcol: "var(--yellow)",
    placeholder: "Realisatie",
    z: 10,
    src: "/images/image10.jpeg",
    alt: "Schilderrealisatie Van Waes",
  },
  {
    rot: -22,
    bcol: "var(--orange)",
    placeholder: "Realisatie",
    z: 15,
    src: "/images/image8.jpeg",
    alt: "Schilderrealisatie Van Waes",
  },
  {
    rot: 0,
    bcol: "var(--navy)",
    placeholder: "Van Waes",
    isCenter: true,
    z: 30,
    src: "/images/Kind+logo.jpg",
    alt: "Van Waes Schilderwerken",
  },
  {
    rot: 22,
    bcol: "var(--orange)",
    placeholder: "Realisatie",
    z: 18,
    src: "/images/image6.jpeg",
    alt: "Schilderrealisatie Van Waes",
  },
  {
    rot: 44,
    bcol: "var(--yellow)",
    placeholder: "Realisatie",
    z: 12,
    src: "/images/image12.jpeg",
    alt: "Schilderrealisatie Van Waes",
  },
];

export default function HeroFan() {
  const fanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fan = fanRef.current;
    if (!fan) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const bladeEls = Array.from(fan.querySelectorAll<HTMLElement>(".blade"));
    const baseRots = bladeEls.map((b) => parseFloat(b.dataset.rot || "0"));
    let activeIndex: number | null = null;
    let enterTimer: ReturnType<typeof setTimeout> | null = null;
    let leaveTimer: ReturnType<typeof setTimeout> | null = null;

    const applyHover = (i: number) => {
      activeIndex = i;
      fan.classList.add("hovering");
      bladeEls.forEach((b, j) => {
        if (j === i) {
          b.classList.add("is-hover");
          const easedRot = baseRots[j] * 0.2;
          b.style.transform = `translateX(-50%) rotate(${easedRot}deg) scale(1.008) translateY(-2px)`;
          b.style.zIndex = "60";
        } else {
          const dir = j < i ? -1 : 1;
          const extra = Math.abs(j - i) * 0.8;
          b.style.transform = `translateX(-50%) rotate(${baseRots[j] + dir * extra}deg) scale(0.998)`;
          b.style.zIndex = b.dataset.z || "";
          b.classList.remove("is-hover");
        }
      });
    };

    const resetHover = () => {
      activeIndex = null;
      fan.classList.remove("hovering");
      bladeEls.forEach((b) => {
        b.classList.remove("is-hover");
        b.style.transform = "";
        b.style.zIndex = b.dataset.z || "";
      });
    };

    const onBladeEnter = (i: number) => {
      if (leaveTimer) {
        clearTimeout(leaveTimer);
        leaveTimer = null;
      }
      if (activeIndex === i) return;

      if (enterTimer) clearTimeout(enterTimer);
      enterTimer = setTimeout(() => {
        enterTimer = null;
        applyHover(i);
      }, 420);
    };

    const onFanLeave = () => {
      if (enterTimer) {
        clearTimeout(enterTimer);
        enterTimer = null;
      }
      leaveTimer = setTimeout(() => {
        leaveTimer = null;
        resetHover();
      }, 300);
    };

    const onFanEnter = () => {
      if (leaveTimer) {
        clearTimeout(leaveTimer);
        leaveTimer = null;
      }
    };

    const bladeHandlers = bladeEls.map((_, i) => () => onBladeEnter(i));

    fan.addEventListener("mouseleave", onFanLeave);
    fan.addEventListener("mouseenter", onFanEnter);
    bladeEls.forEach((blade, i) => {
      blade.addEventListener("mouseenter", bladeHandlers[i]);
    });

    return () => {
      if (enterTimer) clearTimeout(enterTimer);
      if (leaveTimer) clearTimeout(leaveTimer);
      fan.removeEventListener("mouseleave", onFanLeave);
      fan.removeEventListener("mouseenter", onFanEnter);
      bladeEls.forEach((blade, i) => {
        blade.removeEventListener("mouseenter", bladeHandlers[i]);
      });
    };
  }, []);

  return (
    <div className="hero-fan-wrap reveal" data-d="1">
      <div className="fan" ref={fanRef}>
        <div className="fan-shadow" />
        {blades.map((blade, i) => (
          <div
            key={i}
            className={`blade${blade.isCenter ? " center" : ""}`}
            data-rot={blade.rot}
            data-z={blade.z}
            style={
              {
                "--rot": `${blade.rot}deg`,
                "--bcol": blade.bcol,
                zIndex: blade.z,
              } as React.CSSProperties
            }
          >
            <ImageSlot
              placeholder={blade.placeholder}
              src={blade.src}
              alt={blade.alt}
              fit="cover"
              framed={false}
              position="center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
