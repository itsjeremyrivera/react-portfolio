import SiteHeader from "../components/SiteHeader";
import ParallaxController from "../components/ParallaxController";

const RESUME_URL = "/JeremyRiveraResume.pdf";

const projects = [
  {
    number: "01",
    company: "The Villages",
    type: "Enterprise product design",
    date: "2025 to Present",
    title: "Operational products for point of sale and vehicle specific navigation.",
    tags: ["Product design", "Interaction design", "Mobile", "Front end"],
    imageNote: "Approved Golf Rail or navigation product imagery",
  },
  {
    number: "02",
    company: "Switch by Quadient",
    type: "SaaS product design",
    date: "2022 to 2023",
    title: "Simplifying the journey from document preparation to physical mail.",
    tags: ["Research", "UX/UI", "Dashboard"],
    imageNote: "Approved Switch workflow and dashboard imagery",
  },
  {
    number: "03",
    company: "Payro Finance",
    type: "Financial SaaS",
    date: "Independent",
    title: "A scalable interface system for payroll financing workflows.",
    tags: ["Design systems", "SaaS", "Responsive UI"],
    imageNote: "Payro dashboard and design system imagery",
    image: "/images/payro/payro-dashboard-hero.jpeg",
    href: "/work/payro",
  },
];

const principles = [
  {
    icon: "clarity",
    title: "Clarity before decoration",
    copy: "Every visual choice should make the product, decision, or story easier to understand.",
  },
  {
    icon: "systems",
    title: "Systems that scale",
    copy: "I design reusable patterns that improve consistency without restricting thoughtful product decisions.",
  },
  {
    icon: "craft",
    title: "Craft through implementation",
    copy: "Front end fluency helps me protect the experience from early concept through production delivery.",
  },
];

function PrincipleIcon({ type }) {
  const paths = {
    clarity: (
      <>
        <path d="M2.5 12s3.4-5 9.5-5 9.5 5 9.5 5-3.4 5-9.5 5-9.5-5-9.5-5Z" />
        <circle cx="12" cy="12" r="2.6" />
      </>
    ),
    systems: (
      <>
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="18" cy="7" r="2.2" />
        <circle cx="12" cy="18" r="2.2" />
        <path d="m7.9 7.1 8 0M7.3 7.9l3.5 8M16.9 8.9l-3.6 7" />
      </>
    ),
    craft: <path d="m8.5 7-4 5 4 5M15.5 7l4 5-4 5M13.5 4.5l-3 15" />,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

function ContactIcon({ type }) {
  if (type === "linkedin") {
    return (
      <svg className="contact-icon linkedin-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
      </svg>
    );
  }

  const paths = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    resume: <><path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
  };

  return <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

function ProjectPlaceholder({ project, featured }) {
  if (project.image) {
    return (
      <div className={featured ? "project-media featured-visual parallax-layer parallax-media-layer" : "project-media parallax-layer parallax-media-layer"} data-parallax data-parallax-speed="48" data-parallax-x="10">
        <img src={project.image} alt={`${project.company} product interface overview`} />
      </div>
    );
  }

  return (
    <div className={featured ? "project-placeholder featured-visual parallax-layer parallax-media-layer" : "project-placeholder parallax-layer parallax-media-layer"} data-parallax data-parallax-speed="48" data-parallax-x="10" role="img" aria-label={`${project.company} project image placeholder`}>
      <div className="placeholder-window" aria-hidden="true">
        <div className="placeholder-toolbar"><i /><i /><i /><span /></div>
        <div className="placeholder-canvas">
          <div className="placeholder-sidebar" />
          <div className="placeholder-content">
            <span className="placeholder-line line-short" />
            <span className="placeholder-line line-wide" />
            <div className="placeholder-panels"><span /><span /></div>
            <span className="placeholder-line line-medium" />
          </div>
        </div>
      </div>
      <div className="placeholder-label">
        <span>Image placeholder</span>
        <strong>{project.company}</strong>
        <small>{project.imageNote}</small>
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false }) {
  const motionDirection = project.number === "03" ? 14 : -14;

  return (
    <article className={`project-card motion-card parallax-layer parallax-copy-layer ${featured ? "featured" : ""}`} data-parallax data-parallax-speed={featured ? 30 : 38} data-parallax-x={motionDirection}>
      <ProjectPlaceholder project={project} featured={featured} />
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.number}</span>
          <span>{project.type}</span>
          <span>{project.date}</span>
        </div>
        <h3>{project.company}</h3>
        <p className="project-title">{project.title}</p>
        <div className="tag-row">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-footer">
          {project.href ? (
            <a className="case-study-button case-study-link" href={project.href}>View case study <span aria-hidden="true">→</span></a>
          ) : (
            <button className="case-study-button" type="button" disabled>Case study coming soon</button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader resumeUrl={RESUME_URL} />
      <ParallaxController />

      <main id="main">
        <section className="hero shell" id="top" data-scroll-hero>
          <div className="hero-gradient parallax-layer" data-parallax data-parallax-speed="-38" data-parallax-x="34" aria-hidden="true"><span /></div>
          <div className="hero-scroll-copy">
            <h1 className="hero-title">
              I make complex products easier to <em>build, use, and scale.</em>
            </h1>
            <div className="hero-grid hero-support">
              <p>
                Product Designer with 6+ years turning complex workflows into clear,
                buildable digital products.
              </p>
              <div className="actions">
                <a className="button primary" href="#work">View selected work <span aria-hidden="true">↓</span></a>
                <a className="button secondary" href={RESUME_URL} target="_blank" rel="noreferrer">View résumé PDF</a>
              </div>
            </div>
          </div>
          <div className="hero-scroll-impact">
            <div className="impact-grid hero-impact" aria-label="Selected impact">
              <div className="impact-item parallax-layer parallax-copy-layer" data-parallax data-parallax-speed="18"><span>01</span><strong>15,000+</strong><p>User product environment at Quadient</p></div>
              <div className="impact-item parallax-layer parallax-copy-layer" data-parallax data-parallax-speed="28"><span>02</span><strong>5 to 2 weeks</strong><p>Prototype delivery cycle at Electus</p></div>
              <div className="impact-item parallax-layer parallax-copy-layer" data-parallax data-parallax-speed="38"><span>03</span><strong>20%</strong><p>Reduction in development timelines</p></div>
            </div>
          </div>
        </section>

        <section className="section shell scroll-scene" id="work" data-parallax data-parallax-speed="0">
          <div className="section-heading parallax-layer parallax-copy-layer" data-parallax data-parallax-speed="58" data-parallax-x="-16">
            <div>
              <h2>Products shaped around real operational complexity.</h2>
              <p className="section-intro">Enterprise operations, digital mail SaaS, and financial product systems.</p>
            </div>
          </div>
          <ProjectCard project={projects[0]} featured />
          <div className="project-grid">
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </div>
        </section>

        <section className="bridge section scroll-scene" data-parallax data-parallax-speed="0">
          <div className="shell bridge-grid">
            <div className="parallax-layer parallax-copy-layer" data-parallax data-parallax-speed="52" data-parallax-x="-14">
              <h2>I connect product thinking, visual craft, and implementation.</h2>
            </div>
            <div className="principles">
              {principles.map((principle, index) => (
                <article className="parallax-layer parallax-copy-layer" data-parallax data-parallax-speed={24 + index * 7} data-parallax-x={8 + index * 4} key={principle.title}>
                  <span className="principle-icon"><PrincipleIcon type={principle.icon} /></span>
                  <div><h3>{principle.title}</h3><p>{principle.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell scroll-scene" id="about" data-parallax data-parallax-speed="0">
          <div className="section-heading parallax-layer parallax-copy-layer" data-parallax data-parallax-speed="54" data-parallax-x="-16">
            <h2>A designer who understands how products get built.</h2>
          </div>
          <div className="about-grid">
            <p className="about-lede parallax-layer parallax-copy-layer" data-parallax data-parallax-speed="38" data-parallax-x="-12">
              I’ve worked across enterprise operations, digital mail SaaS, financial
              services, e commerce, and independent client products.
            </p>
            <div className="parallax-layer parallax-copy-layer" data-parallax data-parallax-speed="-32" data-parallax-x="12">
              <p>
                My front end background helps me design realistic solutions, surface constraints
                early, and collaborate closely with engineering. I’m based in Central Florida.
              </p>
              <a className="button primary inline-button" href="/about">More about me <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="section shell contact scroll-scene" id="contact" data-parallax data-parallax-speed="0">
          <div className="hero-status contact-status parallax-layer parallax-copy-layer" data-parallax data-parallax-speed="30"><span /> Available for select product design opportunities</div>
          <div className="contact-grid">
            <h2 className="parallax-layer parallax-copy-layer" data-parallax data-parallax-speed="54" data-parallax-x="-14">Let’s build something clear, useful, and scalable.</h2>
            <div className="contact-copy parallax-layer parallax-copy-layer" data-parallax data-parallax-speed="-34" data-parallax-x="14">
              <p>I’m available for product design opportunities and select collaborations.</p>
              <div className="contact-links">
                <a className="contact-button primary-contact" href="mailto:jeremyrivera23@yahoo.com"><span><ContactIcon type="email" />Email me</span></a>
                <a className="contact-button" href="https://linkedin.com/in/itsjeremyrivera" target="_blank" rel="noreferrer"><span><ContactIcon type="linkedin" />LinkedIn</span></a>
                <a className="contact-button" href={RESUME_URL} target="_blank" rel="noreferrer"><span><ContactIcon type="resume" />Résumé PDF</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <span>Jeremy Rivera / Product Designer</span>
      </footer>
    </>
  );
}
