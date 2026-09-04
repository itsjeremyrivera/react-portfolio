"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroGlow.module.css";

export default function HeroGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const hero = glow.parentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let rotateX = 0;
    let rotateY = 0;

    const updateTilt = () => {
      frame = 0;
      glow.style.setProperty("--glow-rotate-x", `${rotateX.toFixed(2)}deg`);
      glow.style.setProperty("--glow-rotate-y", `${rotateY.toFixed(2)}deg`);
    };

    const resetTilt = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      glow.style.removeProperty("--glow-rotate-x");
      glow.style.removeProperty("--glow-rotate-y");
    };

    const move = (event) => {
      if (reducedMotion.matches || !finePointer.matches || event.pointerType === "touch") return;
      const bounds = hero.getBoundingClientRect();
      const x = Math.max(-0.5, Math.min(0.5, (event.clientX - bounds.left) / bounds.width - 0.5));
      const y = Math.max(-0.5, Math.min(0.5, (event.clientY - bounds.top) / bounds.height - 0.5));
      rotateX = -y * 14;
      rotateY = x * 18;
      if (!frame) frame = window.requestAnimationFrame(updateTilt);
    };

    const observer = new IntersectionObserver(([entry]) => {
      glow.dataset.active = String(entry.isIntersecting);
      if (!entry.isIntersecting) resetTilt();
    });
    observer.observe(hero);
    hero.addEventListener("pointermove", move, { passive: true });
    hero.addEventListener("pointerleave", resetTilt);
    reducedMotion.addEventListener("change", resetTilt);
    finePointer.addEventListener("change", resetTilt);

    return () => {
      observer.disconnect();
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", resetTilt);
      reducedMotion.removeEventListener("change", resetTilt);
      finePointer.removeEventListener("change", resetTilt);
      resetTilt();
    };
  }, []);

  return (
    <div ref={glowRef} className={styles.glow} aria-hidden="true" data-hero-glow>
      <div className={styles.haze} />
      <div className={styles.perspective}>
        <div className={styles.tilt}>
          <div className={styles.sculpture}>
            <span className={`${styles.ring} ${styles.outer}`} />
            <span className={`${styles.ring} ${styles.middle}`} />
            <span className={`${styles.ring} ${styles.inner}`} />
            <span className={styles.core} />
          </div>
        </div>
      </div>
    </div>
  );
}
