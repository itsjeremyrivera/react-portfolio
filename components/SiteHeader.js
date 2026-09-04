"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function SiteHeader({ resumeUrl = "/JeremyRiveraResume.pdf" }) {
  const menuButton = useRef(null);
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  const links = [
    ["Work", "/#work", false],
    ["About", "/about", false],
    ["Résumé PDF", resumeUrl, true],
    ["Contact", "/#contact", false],
  ];

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch {
      // The system theme still works when storage is unavailable.
    }
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    headerRef.current?.querySelector("#site-navigation a")?.focus({ preventScroll: true });

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
    };
  }, [menuOpen]);

  const applyTheme = (nextTheme) => {
    setTheme(nextTheme);
    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // Apply the theme even when the preference cannot be saved.
    }
    if (nextTheme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", nextTheme);
    }
  };

  const cycleTheme = () => {
    applyTheme(theme === "system" ? "light" : theme === "light" ? "dark" : "system");
  };

  return (
    <header
      className="site-header-wrap"
      ref={headerRef}
    >
      <div className="site-header shell">
        <div className="header-actions">
          <nav id="site-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
            {links.map(([label, href, external]) => (
              <Link
                key={label}
                href={href}
                prefetch={external ? false : undefined}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button className="icon-button theme-button" type="button" onClick={cycleTheme} aria-label={`Theme: ${theme}. Change theme.`} title={`Theme: ${theme}`}>
            <span aria-hidden="true">◐</span>
          </button>

          <button
            ref={menuButton}
            className={menuOpen ? "menu-button is-open" : "menu-button"}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
