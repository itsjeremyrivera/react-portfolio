import SiteHeader from "../../../components/SiteHeader";

const RESUME_URL = "/JeremyRiveraResume.pdf";

const productDecisions = [
  {
    title: "Turn ambiguous data into useful choices",
    copy: "I helped consolidate overlapping property data into a filter structure people could understand without knowing the organization behind the data.",
  },
  {
    title: "Keep browsing and geography connected",
    copy: "The listing rail and map work as one canvas, helping people compare home details without losing the location context behind each option.",
  },
  {
    title: "Let people inspect a home without losing their search",
    copy: "The detail layer keeps the search visible behind it while bringing photography, specifications, floor plans, saving, sharing, and contact actions together.",
  },
  {
    title: "Adapt the hierarchy instead of shrinking it",
    copy: "On mobile, search, filters, saved homes, map access, listing cards, and home details are reorganized around touch and one-handed scanning.",
  },
  {
    title: "Protect the design through implementation",
    copy: "Working directly in Angular let me resolve responsive and component-level decisions with the engineers instead of losing them between design and production.",
  },
];

export const metadata = {
  title: "The Villages Homefinder Case Study",
  description: "Designing and building a responsive Angular micro-frontend for home search across The Villages website and mobile apps.",
};

export default function VillagesCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader resumeUrl={RESUME_URL} navBase="/" />

      <main id="main" className="case-study-page villages-case-study">
        <section className="case-hero shell" id="top">
          <a className="case-back" href="/#work">&larr; Back to selected work</a>
          <p className="eyebrow">The Villages / Homefinder</p>
          <h1>Modernizing home search across web and mobile.</h1>
          <p className="case-lede">
            I helped redesign and build Homefinder—an Angular micro-frontend that
            brings property discovery, filters, geographic context, and home details
            into one responsive experience across web and mobile applications.
          </p>
          <div className="case-meta" aria-label="Project details">
            <div><span>Role</span><strong>Product design + Angular implementation</strong></div>
            <div><span>Team</span><strong>4 design engineers + 2 software engineers</strong></div>
            <div><span>Delivery</span><strong>Responsive web + embedded mobile</strong></div>
          </div>
        </section>

        <figure className="villages-hero-media shell">
          <div className="villages-desktop-frame">
            <img
              src="/images/villages/homefinder-desktop.png"
              alt="Homefinder desktop experience with listing filters, home results, and an interactive map"
            />
          </div>
          <div className="villages-mobile-frame">
            <img
              src="/images/villages/homefinder-mobile.png"
              alt="Homefinder mobile experience showing responsive search and listing cards"
            />
          </div>
          <figcaption>
            The live Homefinder experience across desktop and mobile.
            No internal data or unreleased application designs are shown.
          </figcaption>
        </figure>

        <section className="case-section shell">
          <div className="case-section-heading">
            <p className="eyebrow">01 / Context</p>
            <h2>A high-intent search experience inside a much larger ecosystem.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              Homefinder is where prospective residents move from exploring The Villages
              lifestyle to comparing real homes. The experience brings new homes,
              pre-owned homes, and homesites into one searchable list-and-map workspace.
            </p>
            <p>
              A legacy version had already established familiar behaviors, but the product
              also carried ambiguous data points and cross-platform constraints. The work
              required improving clarity without disrupting the way returning users searched.
            </p>
          </div>
        </section>

        <section className="villages-challenge-section shell" aria-labelledby="villages-challenge-title">
          <div className="case-section-heading">
            <p className="eyebrow">02 / Product challenge</p>
            <h2 id="villages-challenge-title">Make complexity useful before making it invisible.</h2>
          </div>
          <div className="villages-challenge-grid">
            <article>
              <span>Data</span>
              <h3>One understandable property model</h3>
              <p>Consolidate ambiguous and overlapping listing attributes into filters people could confidently use.</p>
            </article>
            <article>
              <span>Continuity</span>
              <h3>A respectful evolution of a legacy tool</h3>
              <p>Improve hierarchy and interaction patterns while preserving the mental model returning users already knew.</p>
            </article>
            <article>
              <span>Delivery</span>
              <h3>One product across several hosts</h3>
              <p>Build a responsive experience that works independently on the web and as an embedded mobile surface.</p>
            </article>
          </div>
        </section>

        <section className="villages-interaction-section shell" aria-labelledby="villages-interaction-title">
          <div className="case-section-heading">
            <p className="eyebrow">03 / Interaction model</p>
            <h2 id="villages-interaction-title">Move naturally from discovery to a confident decision.</h2>
          </div>
          <p className="villages-section-intro">
            The strongest part of the experience is not a single screen. It is the way
            browsing, narrowing, and evaluating a home stay connected as one journey.
          </p>
          <div className="villages-interaction-list">
            <article>
              <div className="villages-interaction-copy">
                <span>01 / Explore</span>
                <h3>Scan homes without losing location context.</h3>
                <p>
                  The split list-and-map canvas supports quick visual comparison while
                  category toggles keep new homes, pre-owned homes, and homesites in one search.
                </p>
              </div>
              <figure>
                <img src="/images/villages/homefinder-desktop.png" alt="Homefinder desktop interface with listing results beside an interactive property map" loading="lazy" />
              </figure>
            </article>
            <article>
              <div className="villages-interaction-copy">
                <span>02 / Refine</span>
                <h3>Turn complex inventory into understandable choices.</h3>
                <p>
                  A focused filter layer brings series, areas, bedrooms, bathrooms,
                  garage, homesite, price, square footage, pool, and open-home criteria
                  together without permanently crowding the map.
                </p>
              </div>
              <figure>
                <img src="/images/villages/homefinder-filters.png" alt="Homefinder property filters layered over the map and listing interface" loading="lazy" />
              </figure>
            </article>
            <article>
              <div className="villages-interaction-copy">
                <span>03 / Decide</span>
                <h3>Bring the evidence and next actions into one place.</h3>
                <p>
                  The home-detail layer combines the gallery, tour, price, specifications,
                  map, floor plan, save, share, features, and contact paths while preserving
                  the search behind it.
                </p>
              </div>
              <figure>
                <img src="/images/villages/homefinder-detail.png" alt="Homefinder detail layer with property gallery, specifications, floor plan, save, share, and contact actions" loading="lazy" />
              </figure>
            </article>
          </div>
        </section>

        <section className="villages-detail-section shell" aria-labelledby="villages-detail-title">
          <div className="case-section-heading">
            <p className="eyebrow">04 / Detail experience</p>
            <h2 id="villages-detail-title">Design the moments between interest and action.</h2>
          </div>
          <p className="villages-section-intro">
            Opening a listing creates a focused decision environment. Photography,
            property context, practical actions, and a path to a real person stay
            connected without forcing someone to abandon their search.
          </p>

          <figure className="villages-lightbox-figure">
            <img
              src="/images/villages/homefinder-lightbox.png"
              alt="Homefinder full-screen property gallery with photo, tour, and map modes plus previous and next image controls"
              loading="lazy"
            />
            <figcaption>
              The live gallery supports Photos, Tour, and Map modes, desktop arrow
              controls, and horizontal swipe navigation on touch screens.
            </figcaption>
          </figure>

          <div className="villages-detail-grid">
            <article>
              <span>Visual evaluation</span>
              <h3>Make the home the focus.</h3>
              <p>
                The lightbox removes surrounding search noise and lets people move
                through a deep photo set. On a 360px viewport, a horizontal swipe
                advances the gallery without relying on small arrow targets.
              </p>
            </article>
            <article>
              <span>Action hierarchy</span>
              <h3>Keep high-value actions within reach.</h3>
              <p>
                Map and Floor Plan receive primary emphasis, while Save, call, and
                Share form a compact secondary row that stays easy to scan on mobile.
              </p>
            </article>
            <article>
              <span>Progressive disclosure</span>
              <h3>Reveal depth without front-loading it.</h3>
              <p>
                Home Features, the home series, and community context live in
                accordions with smooth height transitions, adding detail without
                overwhelming the first read.
              </p>
            </article>
            <article>
              <span>Guided conversion</span>
              <h3>Connect interest to a human next step.</h3>
              <p>
                The desktop detail layer keeps a sales-help form beside the home,
                while phone, Sell, and Relocate paths support an agent-assisted
                transition from consideration to conversation.
              </p>
            </article>
          </div>

          <div className="villages-motion-demo">
            <div className="villages-motion-copy">
              <span>Live interaction capture</span>
              <h3>See the detail experience move.</h3>
              <p>
                Recorded from the public product at a true mobile viewport, this
                loop follows the journey from property details into the immersive
                gallery, through a horizontal image change, and back into the
                expandable home information.
              </p>
            </div>
            <figure className="villages-motion-figure">
              <div className="villages-phone-frame villages-motion-phone">
                <picture>
                  <source
                    media="(prefers-reduced-motion: no-preference)"
                    srcSet="/images/villages/homefinder-mobile-interactions.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/villages/homefinder-mobile-detail.png"
                    alt="Mobile Homefinder interaction showing a property gallery, image navigation, and expandable home features"
                    loading="lazy"
                  />
                </picture>
              </div>
              <figcaption>
                Real mobile behavior: open the gallery, move between photos, and
                reveal additional property details.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="case-product-section villages-platform-section">
          <div className="shell">
            <div className="case-section-heading">
              <p className="eyebrow">05 / Platform strategy</p>
              <h2>A shared product, not three look-alike interfaces.</h2>
            </div>
            <p className="case-product-intro">
              Homefinder was implemented as an Angular micro-frontend so the product
              could keep one interface foundation while being consumed by different
              web and mobile environments.
            </p>
            <div className="villages-platform-flow" aria-label="Homefinder platform architecture">
              <div className="villages-flow-source">
                <span>Structured input</span>
                <strong>Property data</strong>
                <p>Listings, categories, attributes, status, pricing, and location.</p>
              </div>
              <span className="villages-flow-arrow" aria-hidden="true">&rarr;</span>
              <div className="villages-flow-core">
                <span>Shared product layer</span>
                <strong>Angular Homefinder micro-frontend</strong>
                <p>Filters, cards, map, saved homes, responsive behavior, and iconography.</p>
              </div>
              <span className="villages-flow-arrow" aria-hidden="true">&rarr;</span>
              <div className="villages-flow-destinations">
                <article><span>Live</span><strong>Public website</strong></article>
                <article><span>Embedded today</span><strong>Legacy mobile app</strong></article>
                <article><span>Integration in progress</span><strong>Next-generation app</strong></article>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section shell villages-decisions-section">
          <div className="case-section-heading">
            <p className="eyebrow">06 / Design decisions</p>
            <h2>Make a dense search tool feel direct and approachable.</h2>
          </div>
          <div className="villages-decision-list">
            {productDecisions.map((decision, index) => (
              <article key={decision.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{decision.title}</h3>
                  <p>{decision.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="villages-responsive-section shell">
          <div className="case-section-heading">
            <p className="eyebrow">07 / Responsive experience</p>
            <h2>Preserve the journey while changing the hierarchy.</h2>
          </div>
          <p className="villages-section-intro">
            Mobile is a purpose-built version of the same product logic—not a scaled-down
            desktop screen. These 360px states show how the experience moves from
            browsing to refinement and detailed evaluation.
          </p>
          <div className="villages-mobile-grid">
            <figure>
              <div className="villages-phone-frame">
                <img src="/images/villages/homefinder-mobile.png" alt="Mobile Homefinder browse state with search controls and full listing cards" loading="lazy" />
              </div>
              <figcaption><strong>Browse</strong><span>Search and compare complete listing cards.</span></figcaption>
            </figure>
            <figure>
              <div className="villages-phone-frame">
                <img src="/images/villages/homefinder-mobile-filters.png" alt="Mobile Homefinder filters with property criteria" loading="lazy" />
              </div>
              <figcaption><strong>Refine</strong><span>Focus on criteria without competing content.</span></figcaption>
            </figure>
            <figure>
              <div className="villages-phone-frame">
                <img src="/images/villages/homefinder-mobile-detail.png" alt="Mobile Homefinder property detail with gallery and facts" loading="lazy" />
              </div>
              <figcaption><strong>Inspect</strong><span>Evaluate a home and act from one clear view.</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="case-section shell villages-contribution-section">
          <div className="case-section-heading">
            <p className="eyebrow">08 / Contribution</p>
            <h2>Design decisions grounded in stakeholder needs and production code.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              I worked directly with stakeholders to clarify requirements, resolve
              ambiguity in the available data, and make product decisions alongside
              four design engineers and two software engineers.
            </p>
            <p>
              My contribution extended through the frontend: I designed interface
              patterns and iconography, implemented substantial parts of the Angular
              experience, and collaborated through responsive behavior and production delivery.
            </p>
            <p>
              The current Homefinder is live on the public website and embedded in the
              legacy application. Integration into the redesigned application is still
              in progress, so no unreleased screens or unfinished outcomes are presented here.
            </p>
            <a className="button secondary inline-button" href="https://www.thevillages.com/homefinder/" target="_blank" rel="noreferrer">
              View live Homefinder <span aria-hidden="true">&#8599;</span>
            </a>
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
