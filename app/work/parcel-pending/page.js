import SiteHeader from "../../../components/SiteHeader";

const RESUME_URL = "/JeremyRiveraResume.pdf";

const workflowSteps = [
  {
    number: "01",
    title: "Recognize the pickup action",
    copy: "People arrived with one clear goal, so the start screen needed one dominant resident action instead of a menu that asked them to learn the system first.",
    image: "/images/parcel-pending/parcel-pending-overview.svg",
    alt: "Recreated Parcel Pending kiosk welcome screen with a dominant Parcel Pick-Up action",
  },
  {
    number: "02",
    title: "Enter the six-digit code",
    copy: "A focused keypad, visible input state, and direct instructions reduced hesitation between the notification in the user's hand and the locker in front of them.",
    image: "/images/parcel-pending/pickup-code.svg",
    alt: "Recreated Parcel Pending access code entry screen",
  },
  {
    number: "03",
    title: "Move from screen to physical space",
    copy: "The confirmation state identified the open compartment and told the user exactly what to do next: collect the package, close the door, and finish.",
    image: "/images/parcel-pending/locker-open.svg",
    alt: "Recreated Parcel Pending confirmation screen showing an open locker",
  },
];

const designPrinciples = [
  {
    title: "One task, one dominant action",
    copy: "The pickup path stayed visually louder than secondary delivery, help, or administrative routes.",
  },
  {
    title: "Design for a public touchscreen",
    copy: "Large targets, concise instructions, strong contrast, and immediate feedback supported quick use while standing at the locker.",
  },
  {
    title: "Make localization part of the system",
    copy: "Reusable layouts and short strings accommodated English, Spanish, and French without changing the core interaction model.",
  },
];

export const metadata = {
  title: "Parcel Pending by Quadient Case Study | Jeremy Rivera",
  description: "Designing a focused, multilingual parcel-locker pickup flow for a product used at global scale.",
};

export default function ParcelPendingCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader resumeUrl={RESUME_URL} navBase="/" />

      <main id="main" className="case-study-page parcel-case-study">
        <section className="case-hero shell" id="top">
          <a className="case-back" href="/#work">&larr; Back to selected work</a>
          <p className="eyebrow">Parcel Pending by Quadient / Smart lockers</p>
          <h1>A six-digit code. A few seconds. Millions of pickups.</h1>
          <p className="case-lede">
            I designed a focused Parcel Pending kiosk pickup flow for people who
            arrived with a code and one job: open the right locker without assistance.
          </p>
          <div className="case-meta" aria-label="Project details">
            <div><span>Role</span><strong>UX/UI design</strong></div>
            <div><span>Scope</span><strong>Kiosk pickup and localization</strong></div>
            <div><span>Period</span><strong>2022 to 2023</strong></div>
          </div>
        </section>

        <figure className="case-hero-image shell parcel-case-hero">
          <div className="parcel-hero-composition">
            <img
              className="parcel-locker-image"
              src="/images/parcel-pending/indoor-locker.png"
              alt="Parcel Pending indoor smart locker"
            />
            <img
              className="parcel-screen-image"
              src="/images/parcel-pending/parcel-pending-overview.svg"
              alt="Recreated Parcel Pending kiosk pickup interface"
            />
          </div>
          <figcaption>
            Official public locker imagery paired with a recreated interface based on the documented pickup flow. No confidential artifacts are shown.
          </figcaption>
        </figure>

        <section className="case-section shell">
          <div className="case-section-heading">
            <p className="eyebrow">01 / Context</p>
            <h2>The interface was intentionally small. The responsibility was not.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              Parcel pickup begins before the touchscreen. A resident receives a notification,
              walks to a physical locker, and arrives expecting the code in their hand to work.
              There is no onboarding moment and very little patience for ambiguity.
            </p>
            <p>
              The design challenge was to protect that expectation across the handoff from phone
              to kiosk to locker door. Every screen needed to communicate status clearly while
              staying fast enough to feel almost invisible.
            </p>
          </div>
        </section>

        <section className="parcel-scale shell" aria-labelledby="parcel-scale-title">
          <div className="parcel-scale-heading">
            <p className="eyebrow">Public product scale today</p>
            <h2 id="parcel-scale-title">Designed for a system that could not afford confusion.</h2>
          </div>
          <div className="parcel-scale-grid">
            <div><strong>5M+</strong><span>users served</span></div>
            <div><strong>~18K</strong><span>locations worldwide</span></div>
            <div><strong>~75M</strong><span>parcels annually</span></div>
          </div>
          <p className="parcel-scale-note">
            These are Parcel Pending&apos;s current public ecosystem figures, included to show the
            scale of the product—not as outcomes attributed solely to my design.
          </p>
          <a href="https://www.parcelpending.com/" target="_blank" rel="noreferrer">
            View Parcel Pending&apos;s public product data <span aria-hidden="true">&#8599;</span>
          </a>
        </section>

        <section className="case-product-section parcel-workflow-section">
          <div className="shell">
            <div className="case-section-heading">
              <p className="eyebrow">02 / Pickup flow</p>
              <h2>Remove decisions until only the right next step remains.</h2>
            </div>
            <p className="case-product-intro">
              The resident already had the credential required to retrieve a package. The UI&apos;s
              job was to recognize that intent, accept the code, and make the physical result obvious.
            </p>
            <div className="parcel-workflow-grid">
              {workflowSteps.map((step) => (
                <article className="parcel-workflow-card" key={step.title}>
                  <div className="parcel-workflow-media">
                    <img src={step.image} alt={step.alt} />
                  </div>
                  <div className="parcel-workflow-copy">
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section shell parcel-language-section">
          <div className="case-section-heading">
            <p className="eyebrow">03 / Localization</p>
            <h2>Keep the interaction consistent across languages.</h2>
            <p className="parcel-language-note">
              Parcel Pending publicly documents kiosk support for English, Spanish, and French.
              This case study stays within that verified language scope.
            </p>
          </div>
          <figure className="parcel-language-figure">
            <img
              src="/images/parcel-pending/language-selector.svg"
              alt="Recreated language selector with English, Spanish, and French options"
            />
            <figcaption>Recreated localization state based on Parcel Pending&apos;s public product documentation.</figcaption>
          </figure>
        </section>

        <section className="case-section shell parcel-principles-section">
          <div className="case-section-heading">
            <p className="eyebrow">04 / Design decisions</p>
            <h2>Simplicity was the outcome of the design work.</h2>
          </div>
          <div className="switch-priority-list">
            {designPrinciples.map((principle) => (
              <article key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="parcel-proof-section">
          <div className="shell parcel-proof-grid">
            <div>
              <p className="eyebrow">Public customer signal</p>
              <blockquote>
                “Pick-up with the lockers was so easy and much faster than a regular delivery.”
              </blockquote>
              <p className="parcel-proof-attribution">Victoria C. / University of Florida</p>
            </div>
            <div className="parcel-proof-copy">
              <p>
                The strongest signal for this kind of interface is not that people notice the UI.
                It is that they complete the pickup quickly and describe the experience as easy.
              </p>
              <a href="https://www.parcelpending.com/en-us/" target="_blank" rel="noreferrer">
                View public Parcel Pending testimonials <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </div>
        </section>

        <section className="case-section shell switch-contribution-section">
          <div className="case-section-heading">
            <p className="eyebrow">05 / Contribution</p>
            <h2>Designing the last few feet of a much larger service.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              My contribution centered on the resident-facing kiosk pickup flow: the entry point,
              code interaction, completion state, and localized variants that connected a digital
              notification to a physical locker door.
            </p>
            <p>
              It is a compact project, but a useful example of product judgment. The right solution
              was not more UI—it was a clear, durable interaction that could repeat across locations,
              hardware installations, and languages without making the user think about the system behind it.
            </p>
          </div>
        </section>

        <section className="case-next shell">
          <p className="eyebrow">Selected work</p>
          <h2>Return to the full portfolio.</h2>
          <a className="button primary" href="/#work">View selected work <span aria-hidden="true">&rarr;</span></a>
        </section>
      </main>

      <footer className="site-footer shell">
        <span>Jeremy Rivera / Product Designer</span>
      </footer>
    </>
  );
}
