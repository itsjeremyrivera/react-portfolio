import SiteHeader from "../components/SiteHeader";

const RESUME_URL = "https://drive.google.com/file/d/1QOMANcqVvlxiBwIrWUiEXT-1QYgAN54C/view?usp=sharing";

const projects = [
  {
    number: "01",
    company: "The Villages",
    type: "Enterprise product design",
    date: "2025 to Present",
    title: "Operational products for point of sale and vehicle specific navigation.",
    summary:
      "Product design and front end delivery for Golf Rail, reusable interaction patterns for a .NET MAUI Blazor Hybrid application, and close collaboration with engineering across complex operational workflows.",
    tags: ["Product design", "Interaction design", "Mobile", "Front end"],
    imageNote: "Approved Golf Rail or navigation product imagery",
  },
  {
    number: "02",
    company: "Switch by Quadient",
    type: "SaaS product design",
    date: "2022 to 2023",
    title: "Simplifying the journey from document preparation to physical mail.",
    summary:
      "End to end UI design across onboarding, document upload, address verification, mailing, payment, and account management flows in a product environment serving 15,000+ users.",
    tags: ["Research", "UX/UI", "Dashboard"],
    imageNote: "Approved Switch workflow and dashboard imagery",
  },
  {
    number: "03",
    company: "Payro Finance",
    type: "Financial SaaS",
    date: "Independent",
    title: "A scalable interface system for payroll financing workflows.",
    summary:
      "Custom dashboard components and reusable patterns designed to make complex financial actions clearer, faster, and easier to scale.",
    tags: ["Design systems", "SaaS", "Responsive UI"],
    imageNote: "Payro dashboard and design system imagery",
  },
];

const principles = [
  {
    number: "01",
    title: "Clarity before decoration",
    copy: "Every visual choice should make the product, decision, or story easier to understand.",
  },
  {
    number: "02",
    title: "Systems that scale",
    copy: "I design reusable patterns that improve consistency without restricting thoughtful product decisions.",
  },
  {
    number: "03",
    title: "Craft through implementation",
    copy: "Front end fluency helps me protect the experience from early concept through production delivery.",
  },
];

function ProjectPlaceholder({ project, featured }) {
  return (
    <div className={featured ? "project-placeholder featured-visual" : "project-placeholder"} role="img" aria-label={`${project.company} project image placeholder`}>
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
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <ProjectPlaceholder project={project} featured={featured} />
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
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-footer">
          <span>Case study in progress</span>
          <span aria-hidden="true">↗</span>
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

      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-status"><span /> Available for select product design opportunities</div>
          <p className="eyebrow">Product design × front end fluency</p>
          <h1>
            I design complex products, and make them easier to <em>build, use, and scale.</em>
          </h1>
          <div className="hero-grid">
            <p>
              Product Designer with 6+ years shaping enterprise software, SaaS platforms,
              dashboards, websites, and cross platform mobile products. I lead work from
              research and workflow definition through high fidelity prototyping and
              engineering delivery.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">View selected work <span aria-hidden="true">↓</span></a>
              <a className="button secondary" href={RESUME_URL} target="_blank" rel="noreferrer">View résumé PDF</a>
            </div>
          </div>
          <div className="impact-grid" aria-label="Selected impact">
            <div><span>01</span><strong>15,000+</strong><p>User product environment at Quadient</p></div>
            <div><span>02</span><strong>5 to 2 weeks</strong><p>Prototype delivery cycle at Electus</p></div>
            <div><span>03</span><strong>20%</strong><p>Reduction in development timelines</p></div>
          </div>
        </section>

        <section className="section shell" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <div>
              <h2>Products shaped around real operational complexity.</h2>
              <p className="section-intro">A focused selection spanning enterprise operations, digital mail SaaS, and financial product systems.</p>
            </div>
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
              <p className="eyebrow">How I work</p>
              <h2>I connect product thinking, visual craft, and implementation.</h2>
            </div>
            <div className="principles">
              {principles.map((principle) => (
                <article key={principle.number}>
                  <span>{principle.number}</span>
                  <div><h3>{principle.title}</h3><p>{principle.copy}</p></div>
                </article>
              ))}
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
              I’ve worked across enterprise operations, digital mail SaaS, financial
              services, e commerce, and independent client products.
            </p>
            <div>
              <p>
                My front end background helps me explore realistic solutions, communicate
                constraints early, and create implementation ready experiences without losing
                sight of the user.
              </p>
              <p>
                I’m based in Central Florida and open to product design opportunities where
                complex workflows, strong collaboration, and thoughtful systems matter.
              </p>
              <a className="button secondary inline-button" href={RESUME_URL} target="_blank" rel="noreferrer">View full résumé PDF <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section shell independent-section">
          <div className="section-heading">
            <p className="eyebrow">Independent projects</p>
            <h2>Building focused products from idea to launch.</h2>
          </div>
          <div className="independent-card">
            <div>
              <span className="status">Currently developing</span>
              <h3>Independent product studio</h3>
              <p>
                Exploring practical products across fitness routines, synchronized music,
                and creator workflows. Each product is designed, built, tested, and shipped independently.
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
          <div className="contact-grid">
            <h2>Let’s build something clear, useful, and scalable.</h2>
            <div className="contact-copy">
              <p>I’m available for product design opportunities and select collaborations.</p>
              <div className="contact-links">
                <a className="contact-button primary-contact" href="mailto:jeremyrivera23@yahoo.com">Email me <span aria-hidden="true">↗</span></a>
                <a className="contact-button" href="https://linkedin.com/in/itsjeremyrivera" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
                <a className="contact-button" href={RESUME_URL} target="_blank" rel="noreferrer">Résumé PDF <span aria-hidden="true">↗</span></a>
              </div>
            </div>
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
