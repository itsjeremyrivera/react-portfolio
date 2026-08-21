"use client";

import { useEffect, useState } from "react";

export default function SiteHeader({ resumeUrl = "/JeremyRiveraResume.pdf", navBase = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  const links = [
    ["Work", `${navBase}#work`, false],
    ["About", `${navBase}#about`, false],
    ["Résumé PDF", resumeUrl, true],
    ["Contact", `${navBase}#contact`, false],
  ];

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
        <a className="brand" href={`${navBase}#top`} aria-label="Jeremy Rivera home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" focusable="false">
              <rect className="brand-mark-surface" x="1" y="1" width="46" height="46" rx="14" />
              <path className="brand-mark-glint" d="M7 19C14 8 28 4 40 10" />
              <path className="brand-mark-glyph" d="M8.5 12.5H21V29c0 5.8-3.6 9-9 9-3.5 0-6.3-1.7-7.7-4.5" />
              <path className="brand-mark-glyph" d="M25 38V12.5h7.2c6 0 9.6 3.1 9.6 8s-3.6 8-9.6 8H25m7.5 0L42 38" />
            </svg>
          </span>
          <span className="brand-copy">
            <strong>Jeremy Rivera</strong>
            <em>Product Designer</em>
          </span>
        </a>

        <div className="header-actions">
          <nav id="site-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
            {links.map(([label, href, external]) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <button className="icon-button theme-button" type="button" onClick={cycleTheme} aria-label={`Theme: ${theme}. Change theme.`} title={`Theme: ${theme}`}>
            <span aria-hidden="true">◐</span>
          </button>

          <button
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
