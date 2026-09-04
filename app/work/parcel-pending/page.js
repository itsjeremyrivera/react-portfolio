import { CaseStudyNavigation, NextCaseStudy } from "../../../components/CaseStudyNavigation";
import SiteHeader from "../../../components/SiteHeader";
import parcelLockersField from "./parcel-lockers-field-data";
import kioskWelcomeInstructions from "./kiosk-welcome-instructions-data";
import kioskCodeEntryEn from "./kiosk-code-entry-en-data";
import kioskCodeEntryEs from "./kiosk-code-entry-es-data";

const RESUME_URL = "/JeremyRiveraResume.pdf";

const designPrinciples = [
  {
    title: "One task, one dominant action",
    copy: "Residents arrived with a pickup code and a clear goal, so the interface kept code entry and scanning visually dominant while secondary actions stayed out of the way.",
  },
  {
    title: "Design for a public touchscreen",
    copy: "Large numeric targets, concise instructions, strong contrast, and obvious input state made the interaction usable while standing at the locker—not sitting at a desk.",
  },
  {
    title: "Keep localization inside the same interaction model",
    copy: "The production interface preserves the same keypad structure and task hierarchy in English and Spanish, reducing the need to relearn the flow when the language changes.",
  },
];

export const metadata = {
  alternates: { canonical: "/work/parcel-pending" },
  title: "Parcel Pending by Quadient Case Study",
  description: "A compact self-service parcel pickup experience designed for a real Parcel Pending locker installation.",
};

export default function ParcelPendingCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader resumeUrl={RESUME_URL} navBase="/" />

      <main id="main" className="case-study-page parcel-case-study parcel-production-case-study">
        <section className="case-hero shell" id="top">
          <a className="case-back" href="/#work">&larr; Back to selected work</a>
          <p className="eyebrow">Parcel Pending by Quadient / Self-service parcel pickup</p>
          <h1>One clear task. Get the parcel and keep moving.</h1>
          <p className="case-lede">
            I designed a straightforward Parcel Pending kiosk experience around the intent residents
            already brought with them: enter or scan the code they received, retrieve the parcel, and leave.
          </p>
          <div className="case-meta" aria-label="Project details">
            <div><span>Role</span><strong>UX/UI design</strong></div>
            <div><span>Scope</span><strong>Kiosk interaction and localization</strong></div>
            <div><span>Period</span><strong>2022 to 2023</strong></div>
          </div>
          <CaseStudyNavigation sections={[
            ["strategy", "Strategy"],
            ["production-flow", "Pickup flow"],
            ["localization", "Localization"],
            ["design-decisions", "Design decisions"],
            ["contribution", "My contribution"],
          ]} />
        </section>

        <figure className="case-hero-image shell parcel-live-hero">
          <div className="parcel-live-hero-grid">
            <div className="parcel-live-physical">
              <img
                src={parcelLockersField}
                alt="Parcel Pending locker installation photographed on location"
              />
            </div>
            <div className="parcel-live-interface">
              <img
                src={kioskCodeEntryEn}
                alt="Parcel Pending production kiosk interface with numeric keypad and code entry field"
              />
            </div>
          </div>
          <figcaption>
            Production Parcel Pending installation and kiosk interface photographed on location.
          </figcaption>
        </figure>

        <section id="strategy" className="case-section shell">
          <div className="case-section-heading">
            <p className="eyebrow">01 / Strategy</p>
            <h2>The interface did not need to explain the system. It needed to complete the task.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              Residents arrive after receiving a pickup code by email or SMS. That means the kiosk is
              not the beginning of the journey—it is the last digital step before the physical pickup.
            </p>
            <p>
              The strategy was to remove unnecessary decisions: tell the resident what they need,
              provide a direct code or barcode path, and keep the screen focused on the action in front of them.
            </p>
          </div>
        </section>

        <section className="parcel-scale shell" aria-labelledby="parcel-scale-title">
          <div className="parcel-scale-heading">
            <p className="eyebrow">Public product scale today</p>
            <h2 id="parcel-scale-title">Simple interactions matter more when they repeat at scale.</h2>
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

        <section id="production-flow" className="case-product-section parcel-production-flow">
          <div className="shell">
            <div className="case-section-heading">
              <p className="eyebrow">02 / Production flow</p>
              <h2>Use the real interface to show how little the resident has to think about.</h2>
            </div>
            <p className="case-product-intro">
              The production screens are intentionally compact. Instructions establish the pickup expectation,
              then the primary screen centers the code field, barcode option, keypad, and a single forward action.
            </p>

            <div className="parcel-production-grid">
              <figure className="parcel-production-card">
                <div className="parcel-production-media">
                  <img
                    src={kioskWelcomeInstructions}
                    alt="Parcel Pending production welcome screen explaining that pickup requires a code received by email or SMS"
                  />
                </div>
                <figcaption>
                  <span>01</span>
                  <div>
                    <h3>Set the expectation before input</h3>
                    <p>The welcome state tells residents what they need and warns them before a pickup code becomes invalid.</p>
                  </div>
                </figcaption>
              </figure>

              <figure className="parcel-production-card">
                <div className="parcel-production-media">
                  <img
                    src={kioskCodeEntryEn}
                    alt="Parcel Pending production English code entry screen"
                  />
                </div>
                <figcaption>
                  <span>02</span>
                  <div>
                    <h3>Make the next action unmistakable</h3>
                    <p>The input field, large keypad, barcode path, and Enter action keep the interaction centered on one task.</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="localization" className="case-section shell parcel-production-localization">
          <div className="case-section-heading">
            <p className="eyebrow">03 / Localization</p>
            <h2>Change the language without changing the mental model.</h2>
            <p className="parcel-language-note">
              The photographed Spanish state keeps the same keypad, input hierarchy, barcode instruction,
              help affordance, and primary action as the English production screen.
            </p>
          </div>
          <figure className="parcel-localization-photo">
            <img
              src={kioskCodeEntryEs}
              alt="Parcel Pending production kiosk interface displayed in Spanish"
            />
            <figcaption>Spanish production state photographed on the same Parcel Pending installation.</figcaption>
          </figure>
        </section>

        <section id="design-decisions" className="case-section shell parcel-principles-section">
          <div className="case-section-heading">
            <p className="eyebrow">04 / Design decisions</p>
            <h2>Simplicity was the strategy, not the absence of one.</h2>
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
                For this kind of self-service product, the interface is doing its job when the resident
                can move from notification to physical pickup without needing to understand the system behind it.
              </p>
              <a href="https://www.parcelpending.com/en-us/" target="_blank" rel="noreferrer">
                View public Parcel Pending testimonials <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </div>
        </section>

        <section id="contribution" className="case-section shell switch-contribution-section">
          <div className="case-section-heading">
            <p className="eyebrow">05 / Contribution</p>
            <h2>Designing a small interface inside a much larger physical service.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              My contribution centered on the resident-facing kiosk experience: task framing, code entry,
              touchscreen hierarchy, and localized states that connected a digital notification to the physical locker pickup.
            </p>
            <p>
              The project is intentionally compact. The design judgment was knowing where not to add more UI,
              preserving a direct interaction that could be repeated quickly in a public, shared environment.
            </p>
          </div>
        </section>

        <NextCaseStudy
          href="/work/switch"
          company="Switch by Quadient"
          title="Turning physical mail into a guided digital workflow."
        />
      </main>

      <style>{`
        .parcel-production-case-study .parcel-live-hero {
          background: linear-gradient(145deg, #e9edf2, #d8e1ec);
          padding: clamp(1rem, 2.5vw, 2rem);
        }
        .parcel-live-hero-grid {
          min-height: 640px;
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: clamp(1rem, 2.4vw, 2rem);
          align-items: stretch;
        }
        .parcel-live-physical,
        .parcel-live-interface,
        .parcel-production-media,
        .parcel-localization-photo {
          overflow: hidden;
          border-radius: 22px;
          background: #080b10;
          box-shadow: 0 24px 70px rgba(24, 45, 78, .16);
        }
        .parcel-live-physical img,
        .parcel-live-interface img,
        .parcel-production-media img,
        .parcel-localization-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        .parcel-live-physical img { object-position: center; }
        .parcel-live-interface img { object-position: center 38%; }
        .parcel-live-hero > figcaption {
          padding: 1rem .25rem 0;
          color: #49566a;
          font-size: .76rem;
        }
        .parcel-production-flow { padding-block: clamp(5rem, 9vw, 9rem); }
        .parcel-production-grid {
          margin-top: clamp(2.5rem, 5vw, 4.5rem);
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1.5rem, 3vw, 2.8rem);
        }
        .parcel-production-card { margin: 0; }
        .parcel-production-media { aspect-ratio: 4 / 5; }
        .parcel-production-media img { object-position: center 42%; }
        .parcel-production-card figcaption {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1rem;
          padding-top: 1.25rem;
        }
        .parcel-production-card figcaption > span {
          color: var(--accent);
          font-size: .72rem;
          font-weight: 800;
          letter-spacing: .16em;
        }
        .parcel-production-card h3 {
          margin: 0 0 .5rem;
          font-family: var(--serif);
          font-size: clamp(1.6rem, 2.6vw, 2.35rem);
          font-weight: 400;
          line-height: 1.04;
        }
        .parcel-production-card p { margin: 0; color: var(--muted); }
        .parcel-production-localization { align-items: center; }
        .parcel-localization-photo {
          margin: 0;
          max-height: 760px;
        }
        .parcel-localization-photo img {
          max-height: 720px;
          object-position: center 42%;
        }
        .parcel-localization-photo figcaption {
          padding: .8rem .25rem 0;
          color: var(--muted);
          font-size: .76rem;
        }
        @media (max-width: 900px) {
          .parcel-live-hero-grid { min-height: 0; grid-template-columns: 1fr 1fr; }
          .parcel-live-physical,
          .parcel-live-interface { aspect-ratio: 3 / 4; }
        }
        @media (max-width: 680px) {
          .parcel-production-case-study .parcel-live-hero { padding: .65rem; }
          .parcel-live-hero-grid,
          .parcel-production-grid { grid-template-columns: 1fr; }
          .parcel-live-physical,
          .parcel-live-interface,
          .parcel-production-media { aspect-ratio: auto; }
          .parcel-live-physical img,
          .parcel-live-interface img,
          .parcel-production-media img { height: auto; }
        }
      `}</style>

      <footer className="site-footer shell">
        <span>Jeremy Rivera / Product Designer</span>
      </footer>
    </>
  );
}
