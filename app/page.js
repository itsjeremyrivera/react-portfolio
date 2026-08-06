const projects = [
  {
    number: "01",
    company: "The Villages",
    type: "Enterprise product design",
    date: "2025–Present",
    title:
      "Operational products for point-of-sale and vehicle-specific navigation.",
    summary:
      "Product design and front-end delivery for Golf Rail, reusable interaction patterns for a .NET MAUI Blazor Hybrid application, and close collaboration with engineering across complex workflows.",
    tags: ["Product design", "Interaction design", "Mobile", "Front-end"],
  },
  {
    number: "02",
    company: "Switch by Quadient",
    type: "SaaS",
    date: "2022–2023",
    title: "Simplifying the journey from document preparation to physical mail.",
    summary:
      "End-to-end UI design across onboarding, document upload, address verification, mailing, payment, and account-management flows in a product environment serving 15,000+ users.",
    tags: ["Research", "UX/UI", "Dashboard"],
  },
  {
    number: "03",
    company: "Payro Finance",
    type: "Financial SaaS",
    date: "Independent",
    title: "A scalable interface system for payroll-financing workflows.",
    summary:
      "Custom dashboard components and reusable patterns designed to make complex financial actions clearer, faster, and easier to scale.",
    tags: ["Design systems", "SaaS", "Responsive UI"],
  },
];

function Placeholder({ company }) {
  return (
    <div className="project-placeholder" role="img" aria-label={`${company} project image placeholder`}>
      <span>Project imagery</span>
      <strong>{company}</strong>
      <small>Approved screenshots and case-study visuals will be added here.</small>
    </div>
  );
}

function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <Placeholder company={project.company} />
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.number}</span>
          <span>{project.type}</span>
          <span>{project.date}</span>
        </div>
        <h3>{project.company}</h3>
        <p className="project-title">{project.title}</p>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Jeremy Rivera home">
          <span>Jeremy Rivera</span>
          <em>Product Designer</em>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="/resume">Résumé</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero shell" id="top">
          <p className="eyebrow">Product design × front-end fluency</p>
          <h1>
            I design complex products—and make them easier to <em>build, use, and scale.</em>
          </h1>
          <div className="hero-grid">
            <p>
              Product Designer with 6+ years shaping enterprise software, SaaS platforms,
              dashboards, websites, and cross-platform mobile products. I lead work from
              research and workflow definition through high-fidelity prototyping and
              engineering handoff.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">View selected work</a>
              <a className="button secondary" href="/resume">View résumé</a>
            </div>
          </div>
          <div className="impact-strip" aria-label="Selected impact">
            <span>Selected impact</span>
            <span>15,000+ user product environment</span>
            <span>Prototype delivery reduced from ~5 weeks to 2</span>
            <span>Development timelines reduced 20%</span>
          </div>
        </section>

        <section className="section shell" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Products shaped around real operational complexity.</h2>
          </div>
          <ProjectCard project={projects[0]} featured />
          <div className="project-grid">
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </div>
        </section>

        <section className="bridge section">
          <div className="shell bridge-grid">
            <div>
              <p className="eyebrow">My advantage</p>
              <h2>I work where design decisions meet implementation.</h2>
            </div>
            <div>
              <p className="bridge-intro">
                I combine research, systems thinking, interaction design, prototyping, and
                front-end fluency to reduce ambiguity between product and engineering.
              </p>
              <div className="capabilities">
                <div><span>01</span><strong>Define</strong><p>Research, workflows, information architecture</p></div>
                <div><span>02</span><strong>Design</strong><p>Interaction models, prototypes, systems</p></div>
                <div><span>03</span><strong>Deliver</strong><p>Technical collaboration, handoff, front-end</p></div>
                <div><span>04</span><strong>Validate</strong><p>Usability testing, analytics, iteration</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section shell" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>A designer who understands how products get built.</h2>
          </div>
          <div className="about-grid">
            <p className="about-lede">
              I’ve worked across enterprise operations, digital-mail SaaS, financial
              services, e-commerce, and independent client products.
            </p>
            <div>
              <p>
                My front-end background helps me explore realistic solutions, communicate
                constraints early, and create implementation-ready experiences without losing
                sight of the user.
              </p>
              <p>
                I’m based in Central Florida and open to product-design opportunities where
                complex workflows, strong collaboration, and thoughtful systems matter.
              </p>
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading">
            <p className="eyebrow">Independent projects</p>
            <h2>Building products I can own from idea to launch.</h2>
          </div>
          <div className="independent-card">
            <div>
              <span className="status">In development</span>
              <h3>Personal product studio</h3>
              <p>
                Focused products across fitness routines, shared music experiences, and
                creator workflows—designed, built, tested, and shipped independently.
              </p>
            </div>
            <div className="independent-tags">
              <span>Product validation</span>
              <span>Figma systems</span>
              <span>React / TypeScript</span>
              <span>Agentic development</span>
              <span>Vercel deployment</span>
            </div>
          </div>
        </section>

        <section className="section shell contact" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>Let’s build something clear, useful, and scalable.</h2>
          <div className="contact-links">
            <a href="mailto:jeremyrivera23@yahoo.com">jeremyrivera23@yahoo.com</a>
            <a href="https://linkedin.com/in/itsjeremyrivera" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/resume">Résumé</a>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <span>Jeremy Rivera / Product Designer</span>
        <span>Central Florida · 2026</span>
      </footer>
    </>
  );
}
