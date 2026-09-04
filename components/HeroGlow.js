"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./HeroGlow.module.css";

export default function HeroGlow() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
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
      const bounds = scene.getBoundingClientRect();
      rotateX = -(event.clientY - bounds.top - bounds.height / 2) / bounds.height * 7;
      rotateY = (event.clientX - bounds.left - bounds.width / 2) / bounds.width * 9;
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    scene.addEventListener("pointermove", move, { passive: true });
    scene.addEventListener("pointerleave", reset);
    reducedMotion.addEventListener("change", reset);
    finePointer.addEventListener("change", reset);
    return () => {
      scene.removeEventListener("pointermove", move);
      scene.removeEventListener("pointerleave", reset);
      reducedMotion.removeEventListener("change", reset);
      finePointer.removeEventListener("change", reset);
      reset();
    };
  }, []);

  return (
    <div ref={sceneRef} className={styles.scene} aria-label="Product design and frontend implementation" role="img">
      <div className={styles.stack} aria-hidden="true">
        <div className={styles.code}>
          <div className={styles.codeTitle}><span>‹ / ›</span> app/page.js <i>React</i></div>
          <pre><span className={styles.purple}>function</span> <span className={styles.blue}>ProjectCard</span>{"({ project }) {\n  "}<span className={styles.purple}>return</span>{" (\n    "}<span className={styles.green}>&lt;article&gt;</span>{"\n      "}<span className={styles.green}>&lt;h3&gt;</span>{"{project.company}"}<span className={styles.green}>&lt;/h3&gt;</span>{"\n      "}<span className={styles.green}>&lt;p&gt;</span>{"{project.title}"}<span className={styles.green}>&lt;/p&gt;</span>{"\n    "}<span className={styles.green}>&lt;/article&gt;</span>{"\n  );\n}"}</pre>
        </div>
        <div className={styles.product}>
          <div className={styles.productBar}><span>Selected work</span><span>01 / Homefinder</span></div>
          <Image src="/images/villages/homefinder-desktop.png" alt="" width={1440} height={1000} sizes="(max-width: 760px) 300px, 460px" priority />
          <div className={styles.productFooter}><strong>From design to delivery.</strong><span>UX / UI / Angular</span></div>
        </div>
        <div className={styles.phone}>
          <div className={styles.island} />
          <Image src="/images/villages/homefinder-mobile.png" alt="" width={360} height={1100} sizes="100px" />
        </div>
        <div className={styles.note}><span />Designed with intent. Built with care.</div>
      </div>
    </div>
  );
}
