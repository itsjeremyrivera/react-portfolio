"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const remaining =
        document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      setVisible(window.scrollY > 320 && remaining <= 140);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  if (!visible) return null;

  const returnToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <button className="back-to-top" type="button" onClick={returnToTop} aria-label="Back to top">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6.5 14.5 5.5-5.5 5.5 5.5" />
      </svg>
    </button>
  );
}
