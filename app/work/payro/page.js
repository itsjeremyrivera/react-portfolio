import { CaseStudyNavigation, NextCaseStudy } from "../../../components/CaseStudyNavigation";
import SiteHeader from "../../../components/SiteHeader";

const RESUME_URL = "/JeremyRiveraResume.pdf";

const processImages = [
  {
    src: "/images/payro/goals-and-challenges.png",
    alt: "Payro project goals and challenges organized on sticky notes",
    caption: "Framing the product goals and constraints before defining the experience.",
  },
  {
    src: "/images/payro/competitive-research.png",
    alt: "Competitive research board for payroll and lending products",
    caption: "A focused review of adjacent payroll and lending experiences.",
  },
  {
    src: "/images/payro/early-sketches.png",
    alt: "Early Payro application and dashboard sketches",
    caption: "Early sketches explored the application, account, and funding workflows.",
  },
  {
    src: "/images/payro/onboarding-user-flow.png",
    alt: "Payro onboarding user flow diagram",
    caption: "The end-to-end onboarding flow balanced necessary financial steps with a clear sense of progress.",
  },
];

const productImages = [
  {
    src: "/images/payro/focused-signup.jpeg",
    alt: "Payro focused signup experience across verification steps",
    title: "Focused signup",
  },
  {
    src: "/images/payro/frictionless-underwriting.jpeg",
    alt: "Payro underwriting experience shown on desktop and mobile",
    title: "Frictionless underwriting",
  },
  {
    src: "/images/payro/white-glove-onboarding.jpeg",
    alt: "Payro onboarding and account setup screens",
    title: "White-glove onboarding",
  },
  {
    src: "/images/payro/clean-dashboard.jpeg",
    alt: "Payro dashboard showing funding and payroll information",
    title: "A clean operational dashboard",
  },
];

export const metadata = {
  alternates: { canonical: "/work/payro" },
  title: "Payro Finance Case Study",
  description: "Designing a clear, scalable payroll financing experience for small-business owners.",
};

export default function PayroCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader resumeUrl={RESUME_URL} navBase="/" />

      <main id="main" className="case-study-page">
        <section className="case-hero shell" id="top">
          <a className="case-back" href="/#work">← Back to selected work</a>
          <p className="eyebrow">Payro Finance / Financial SaaS</p>
          <h1>Making payroll financing feel clear, fast, and trustworthy.</h1>
          <p className="case-lede">
            I translated Payro Finance&apos;s lending operations into a customer portal
            designed to help small-business owners apply for and manage payroll funding
            with less friction.
          </p>
          <div className="case-meta" aria-label="Project details">
            <div><span>Role</span><strong>UX research and product design</strong></div>
            <div><span>Scope</span><strong>Onboarding, underwriting, dashboard</strong></div>
            <div><span>Deliverable</span><strong>Responsive UI and design system</strong></div>
          </div>
          <CaseStudyNavigation sections={[
            ["context", "Context"],
            ["research", "Research"],
            ["product-experience", "Product experience"],
            ["design-system", "Design system"],
          ]} />
        </section>

        <figure className="case-hero-image shell">
          <img src="/images/payro/payro-dashboard-hero.jpeg" alt="Payro payroll financing dashboard interface" />
        </figure>

        <section id="context" className="case-section shell">
          <div className="case-section-heading">
            <p className="eyebrow">01 / Context</p>
            <h2>A focused lending product for a critical business need.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              Payro had a specific vision: financing built only for payroll. For small-business
              owners navigating cash-flow pressure, the experience needed to make a high-stakes
              process feel understandable, secure, and manageable.
            </p>
            <p>
              I studied the company&apos;s operations and shaped them into a custom web application,
              connecting application, verification, funding, and account management in one coherent journey.
            </p>
          </div>
        </section>

        <section id="research" className="case-section shell case-process-section">
          <div className="case-section-heading">
            <p className="eyebrow">02 / Research and structure</p>
            <h2>Turn the operational model into a journey people can follow.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              Competitive research exposed familiar lending patterns and opportunities to reduce
              confusion. From there, I mapped the architecture, sketched the core interactions,
              and refined the onboarding flow before committing to polished UI.
            </p>
          </div>
          <div className="case-process-grid">
            {processImages.map((image) => (
              <figure className="case-figure" key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="product-experience" className="case-product-section">
          <div className="shell">
            <div className="case-section-heading">
              <p className="eyebrow">03 / Product experience</p>
              <h2>Progressive guidance without losing operational depth.</h2>
            </div>
            <p className="case-product-intro">
              The final experience breaks the financing journey into focused moments, gives customers
              clear feedback, and keeps the most important payroll and funding information visible.
            </p>
            <div className="case-product-grid">
              {productImages.map((image) => (
                <figure className="case-product-card" key={image.src}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <figcaption>{image.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="design-system" className="case-section shell case-system-section">
          <div className="case-section-heading">
            <p className="eyebrow">04 / System and handoff</p>
            <h2>A reusable foundation for the product team.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              The work culminated in a detailed Figma design system that gave engineering reusable
              components, states, and visual patterns for implementing and extending the product.
            </p>
          </div>
          <figure className="case-figure case-system-image">
            <img src="/images/payro/design-system.jpeg" alt="Payro design system components and interface patterns" loading="lazy" />
            <figcaption>Reusable interface patterns supporting a consistent, scalable implementation.</figcaption>
          </figure>
        </section>

        <NextCaseStudy
          href="/work/villages"
          company="The Villages"
          title="Modernizing home search across web and mobile."
        />
      </main>

      <footer className="site-footer shell">
        <span>Jeremy Rivera / Product Designer</span>
      </footer>
    </>
  );
}
