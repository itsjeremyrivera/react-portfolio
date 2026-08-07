"use client";

import { useEffect } from "react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function ParallaxController() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const layers = Array.from(document.querySelectorAll("[data-parallax]"));
    const heroScenes = Array.from(document.querySelectorAll("[data-scroll-hero]"));
    const scrollScenes = Array.from(document.querySelectorAll(".scroll-scene"));
    let frame = 0;

    const clearMotion = () => {
      layers.forEach((layer) => {
        layer.style.removeProperty("--parallax-shift");
        layer.style.removeProperty("--parallax-shift-x");
        layer.style.removeProperty("--parallax-presence");
        layer.style.removeProperty("--parallax-scale");
        layer.style.removeProperty("--parallax-entry");
        layer.style.removeProperty("--parallax-reveal");
      });
      heroScenes.forEach((scene) => scene.style.removeProperty("--hero-progress"));
      scrollScenes.forEach((scene) => scene.style.removeProperty("--scene-progress"));
    };

    const update = () => {
      frame = 0;

      if (reducedMotion.matches) {
        clearMotion();
        return;
      }

      const viewportHeight = window.innerHeight;
      const mobileScale = window.innerWidth < 700 ? 0.72 : 1.35;

      heroScenes.forEach((scene) => {
        const bounds = scene.getBoundingClientRect();
        const progress = clamp(-bounds.top / Math.max(bounds.height * 0.72, 1), 0, 1);
        scene.style.setProperty("--hero-progress", progress.toFixed(3));
      });

      scrollScenes.forEach((scene) => {
        const bounds = scene.getBoundingClientRect();
        const progress = clamp(
          (viewportHeight - bounds.top) / Math.max(viewportHeight + bounds.height, 1),
          0,
          1,
        );
        scene.style.setProperty("--scene-progress", progress.toFixed(3));
      });

      layers.forEach((layer) => {
        const bounds = layer.getBoundingClientRect();

        if (bounds.top > viewportHeight + 160) {
          layer.style.setProperty("--parallax-entry", "0");
          layer.style.setProperty("--parallax-reveal", "54px");
          return;
        }

        if (bounds.bottom < -160) {
          layer.style.setProperty("--parallax-entry", "1");
          layer.style.setProperty("--parallax-reveal", "0px");
          return;
        }

        const configuredTravel = Number(layer.dataset.parallaxSpeed || 10);
        const travel = Math.abs(configuredTravel) * mobileScale;
        const direction = Math.sign(configuredTravel) || 1;
        const configuredHorizontal = Number(layer.dataset.parallaxX || 0);
        const horizontalTravel =
          window.innerWidth < 700 ? 0 : Math.abs(configuredHorizontal) * mobileScale;
        const horizontalDirection = Math.sign(configuredHorizontal) || 1;
        const distanceFromCenter =
          (bounds.top + bounds.height / 2 - viewportHeight / 2) / viewportHeight;
        const shift =
          clamp(-distanceFromCenter * travel, -travel, travel) * direction;
        const shiftX =
          clamp(-distanceFromCenter * horizontalTravel, -horizontalTravel, horizontalTravel) *
          horizontalDirection;
        const presence = clamp(1 - Math.abs(distanceFromCenter) * 0.58, 0.62, 1);
        const entry = clamp(
          (viewportHeight - bounds.top) / Math.max(viewportHeight * 0.34, 1),
          0,
          1,
        );
        const reveal = (1 - entry) * (window.innerWidth < 700 ? 42 : 54);
        const scale = 1.012 + presence * 0.012;

        layer.style.setProperty("--parallax-shift", `${shift.toFixed(2)}px`);
        layer.style.setProperty("--parallax-shift-x", `${shiftX.toFixed(2)}px`);
        layer.style.setProperty("--parallax-presence", presence.toFixed(3));
        layer.style.setProperty("--parallax-entry", entry.toFixed(3));
        layer.style.setProperty("--parallax-reveal", `${reveal.toFixed(2)}px`);
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
