"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroGlow.module.css";

export default function HeroGlow() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const target = scene.parentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let rotateX = 0;
    let rotateY = 0;
    const update = () => {
      frame = 0;
      scene.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
      scene.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
    };
    const reset = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      scene.style.removeProperty("--tilt-x");
      scene.style.removeProperty("--tilt-y");
    };
    const move = (event) => {
      if (reducedMotion.matches || !finePointer.matches || event.pointerType === "touch") return;
      const bounds = target.getBoundingClientRect();
      rotateX = -(event.clientY - bounds.top - bounds.height / 2) / bounds.height * 7;
      rotateY = (event.clientX - bounds.left - bounds.width / 2) / bounds.width * 9;
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(([entry]) => {
      scene.dataset.active = String(entry.isIntersecting);
      if (!entry.isIntersecting) reset();
    });
    observer.observe(target);
    target.addEventListener("pointermove", move, { passive: true });
    target.addEventListener("pointerleave", reset);
    reducedMotion.addEventListener("change", reset);
    finePointer.addEventListener("change", reset);
    return () => {
      observer.disconnect();
      target.removeEventListener("pointermove", move);
      target.removeEventListener("pointerleave", reset);
      reducedMotion.removeEventListener("change", reset);
      finePointer.removeEventListener("change", reset);
      reset();
    };
  }, []);

  return (
    <div ref={sceneRef} className={styles.scene} aria-hidden="true">
      <div className={styles.halo} />
      <div className={styles.depth}>
        <div className={styles.light}>
          <div className={styles.face} />
          <div className={styles.reflection} />
        </div>
      </div>
    </div>
  );
}
