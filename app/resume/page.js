import PrintButton from "./print-button";

const roles = [
  {
    company: "The Villages",
    role: "Front-End Developer & Product Designer",
    dates: "2025 to Present",
    summary:
      "Led product design and front-end delivery for Golf Rail, designed vehicle-specific navigation experiences, introduced collaborative Figma workflows, and partnered with engineering on a .NET MAUI Blazor Hybrid application.",
  },
  {
    company: "Quadient",
    role: "UX/UI Designer",
    dates: "July 2022 to April 2023",
    summary:
      "Owned end-to-end UI design for Switch by Quadient across onboarding, document preparation, address verification, mailing, payment, and account management. Also designed resident-facing kiosk pickup and localized interface states for Parcel Pending, a global smart-locker ecosystem that now publicly reports 5M+ users.",
  },
  {
    company: "Independent",
    role: "Product Designer",
    dates: "April 2023 to Present",
    summary:
      "Designed and developed websites, SaaS dashboards, component systems, and responsive product experiences for independent clients.",
  },
  {
    company: "Electus Media",
    role: "UX/UI Designer",
    dates: "December 2019 to July 2022",
    summary:
      "Designed WCAG-conscious websites and dashboards, produced high-fidelity prototypes that reduced delivery cycles from roughly five weeks to two, and facilitated workshops that reduced development timelines by 20%.",
  },
];

export const metadata = {
  title: "Résumé",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main className="resume-page shell">
      <div className="resume-topbar">
        <a href="/">← Back to portfolio</a>
        <PrintButton />
      </div>
      <article className="resume-sheet">
        <header>
          <h1>Jeremy Rivera</h1>
          <p className="resume-role">Product Designer · Front-End Developer</p>
          <div className="resume-contact">
            <span>Central Florida</span>
            <a href="mailto:jeremyrivera23@yahoo.com">jeremyrivera23@yahoo.com</a>
            <span>(813) 330-6105</span>
            <a href="https://linkedin.com/in/itsjeremyrivera">linkedin.com/in/itsjeremyrivera</a>
          </div>
          <p className="resume-summary">
            Product Designer with 6+ years shaping enterprise software, SaaS platforms, and
            cross-platform mobile experiences. I translate complex operational workflows into
            clear, scalable products through research, systems thinking, rapid prototyping, and
            close partnership with engineering.
          </p>
        </header>

        <section className="resume-section">
          <h2>Experience</h2>
          {roles.map((item) => (
            <div className="resume-item" key={item.company}>
              <h3>{item.company}</h3>
              <p className="meta">{item.role} · {item.dates}</p>
              <p>{item.summary}</p>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>Harvard University</h3>
            <p className="meta">CS50x Computer Science · Online Certificate</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Skills</h2>
          <p>
            Product design, UX/UI design, interaction design, user flows, wireframing,
            prototyping, design systems, responsive design, accessibility, user research,
            usability testing, Figma, Webflow, Maze, Hotjar, Miro, Jira, HTML, CSS,
            JavaScript, Node.js, .NET MAUI Blazor Hybrid, Spanish.
          </p>
        </section>
      </article>
    </main>
  );
}
