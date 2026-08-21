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
            <svg viewBox="0 0 88 64" focusable="false">
              <path className="brand-mark-outline" d="M8 9h29l5 5v27L31 54H13l-6-6V37h13v6h7l4-4V18H8Z" />
              <path className="brand-mark-outline" d="M43 54V9h25l11 11v11l-8 8h-6l14 15H67L54 40v14Z" />
              <path className="brand-mark-outline" d="M54 18v12h12l4-4v-4l-4-4Z" />
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
