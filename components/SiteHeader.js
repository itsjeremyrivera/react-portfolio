"use client";

import { useEffect, useState } from "react";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Résumé", "/resume"],
  ["Contact", "#contact"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme") || "system";
    setTheme(saved);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const applyTheme = (nextTheme) => {
    setTheme(nextTheme);
    window.localStorage.setItem("portfolio-theme", nextTheme);
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
    <header className="site-header-wrap">
      <div className="site-header shell">
        <a className="brand" href="#top" aria-label="Jeremy Rivera home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">JR</span>
          <span className="brand-copy">
            <strong>Jeremy Rivera</strong>
            <em>Product Designer</em>
          </span>
        </a>

        <div className="header-actions">
          <nav id="site-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>

          <button className="icon-button theme-button" type="button" onClick={cycleTheme} aria-label={`Theme: ${theme}. Change theme.`} title={`Theme: ${theme}`}>
            <span aria-hidden="true">◐</span>
          </button>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
