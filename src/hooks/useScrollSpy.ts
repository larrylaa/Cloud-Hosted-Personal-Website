import { useState, useEffect } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "experience",
  "skills",
  "certifications",
  "projects",
  "contact",
];

export function useScrollSpy(): string {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop - 80;
        const bottom = top + el.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return active;
}
