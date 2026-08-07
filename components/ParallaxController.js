"use client";

import { useEffect } from "react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function ParallaxController() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const layers = Array.from(document.querySelectorAll("[data-parallax]"));
    let frame = 0;

    const clearMotion = () => {
      layers.forEach((layer) => {
        layer.style.removeProperty("--parallax-shift");
        layer.style.removeProperty("--parallax-presence");
        layer.style.removeProperty("--parallax-scale");
      });
    };

    const update = () => {
      frame = 0;

      if (reducedMotion.matches) {
        clearMotion();
        return;
      }

      const viewportHeight = window.innerHeight;
      const mobileScale = window.innerWidth < 700 ? 0.45 : 1;

      layers.forEach((layer) => {
        const bounds = layer.getBoundingClientRect();

        if (bounds.bottom < -100 || bounds.top > viewportHeight + 100) return;

        const configuredTravel = Number(layer.dataset.parallaxSpeed || 10);
        const travel = Math.abs(configuredTravel) * mobileScale;
        const direction = Math.sign(configuredTravel) || 1;
        const distanceFromCenter =
          (bounds.top + bounds.height / 2 - viewportHeight / 2) / viewportHeight;
        const shift =
          clamp(-distanceFromCenter * travel, -travel, travel) * direction;
        const presence = clamp(1 - Math.abs(distanceFromCenter) * 0.58, 0.62, 1);
        const scale = 1.012 + presence * 0.012;

        layer.style.setProperty("--parallax-shift", `${shift.toFixed(2)}px`);
        layer.style.setProperty("--parallax-presence", presence.toFixed(3));
        layer.style.setProperty("--parallax-scale", scale.toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      clearMotion();
    };
  }, []);

  return null;
}
