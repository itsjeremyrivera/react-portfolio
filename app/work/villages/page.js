import Image from "next/image";
import SiteHeader from "../../../components/SiteHeader";
import PhoneMockup from "../../../components/PhoneMockup";
import { CaseStudyNavigation, NextCaseStudy } from "../../../components/CaseStudyNavigation";
import styles from "../../../components/CasePresentation.module.css";

export const metadata = {
  alternates: { canonical: "/work/villages" },
  title: "The Villages Homefinder Case Study",
  description: "Product design and Angular implementation for a connected home search experience across web and mobile.",
};

export default function VillagesCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader resumeUrl="/JeremyRiveraResume.pdf" navBase="/" />
      <main id="main" className={styles.page}>
        <div className={styles.wrap}>
          <header className={styles.intro} id="top">
            <a className={styles.back} href="/#work">← Selected work</a>
            <p className="eyebrow">The Villages / Homefinder</p>
            <h1>A better way to find a place to call home.</h1>
            <p className={styles.lede}>I helped design and build a connected home search experience, bringing listings, filters, maps, and property details together across web and mobile.</p>
            <dl className={styles.meta}>
              <div><dt>My role</dt><dd>Product design + Angular implementation</dd></div>
              <div><dt>Team</dt><dd>4 design engineers + 2 software engineers</dd></div>
              <div><dt>Platform</dt><dd>Responsive web + embedded mobile</dd></div>
            </dl>
          </header>
          <figure className={styles.stage}>
            <div className={styles.desktop}>
              <div className={styles.toolbar} aria-hidden="true"><i /><i /><i /><span>thevillages.com / homefinder</span></div>
              <Image src="/images/villages/homefinder-desktop.png" alt="Homefinder with property results beside the map and search controls above" width={1440} height={1000} sizes="(max-width: 760px) 90vw, 1020px" priority />
            </div>
          </figure>
          <p className={styles.caption}>Listings and location share one workspace, so comparing a home keeps its neighborhood in view.</p>
          <div className={styles.contents}>
            <CaseStudyNavigation sections={[["context", "The challenge"], ["interaction-model", "Search & details"], ["mobile", "Mobile experience"], ["platform-strategy", "Implementation"], ["contribution", "My contribution"]]} />
          </div>

          <section id="context" className={`${styles.chapter} ${styles.split}`}>
            <div><p className="eyebrow">01 / The challenge</p><h2>Make a complex search feel familiar.</h2></div>
            <div className={styles.copy}>
              <p>Homefinder brings new homes, pre-owned homes, and homesites into one search. Returning visitors already knew the legacy tool, while the underlying listing data included overlapping and ambiguous attributes.</p>
              <p>I worked with stakeholders to turn that complexity into useful choices, preserving familiar browsing behavior while clarifying the hierarchy of filters, results, and home details.</p>
            </div>
          </section>

          <section id="interaction-model" className={styles.chapter}>
            <div className={styles.split}>
              <div><p className="eyebrow">02 / Search & details</p><h2>Keep the journey connected.</h2></div>
              <div>
                <article className={styles.decision}><span>01</span><div><h3>Refine without crowding the search</h3><p>A dedicated filter layer organizes price, home features, location, and property criteria while keeping the main canvas focused on results.</p></div></article>
                <article className={styles.decision}><span>02</span><div><h3>Inspect a home without losing your place</h3><p>Property details open over the search. Photography, specifications, floor plans, and contact actions stay together in one focused view.</p></div></article>
              </div>
            </div>
            <div className={styles.screens}>
              <figure><a className={styles.screen} href="/images/villages/homefinder-filters.png" target="_blank" rel="noreferrer" aria-label="Open the full Homefinder filter screen" style={{display:"block"}}><Image src="/images/villages/homefinder-filters.png" alt="Property filter controls over the Homefinder search" width={1440} height={1000} sizes="(max-width: 760px) 90vw, 540px" /></a><figcaption className={styles.screenCaption}><strong>Refine the search</strong>Related criteria live together. Open the image for a closer look.</figcaption></figure>
              <figure><a className={styles.screen} href="/images/villages/homefinder-detail.png" target="_blank" rel="noreferrer" aria-label="Open the full Homefinder property detail screen" style={{display:"block"}}><Image src="/images/villages/homefinder-detail.png" alt="A home detail view with a photo gallery, home facts, and contact options" width={1440} height={1000} sizes="(max-width: 760px) 90vw, 540px" /></a><figcaption className={styles.screenCaption}><strong>Evaluate a home</strong>Information and the next action share the same view.</figcaption></figure>
            </div>
          </section>

          <section id="mobile" className={styles.chapter}>
            <p className="eyebrow">03 / Mobile experience</p>
            <h2>The same journey, designed for a smaller screen.</h2>
            <p className={styles.copy}>Search, filters, and home details adapt around touch. The phone stays the same size while the content moves inside it.</p>
            <div className={styles.mobileShowcase}>
              <div><h3>Explore Homefinder in motion.</h3><p className={styles.copy}>Browse the listings, open a home, and explore its details in a recording of the public mobile experience.</p><a className="button secondary inline-button" href="https://www.thevillages.com/homefinder/" target="_blank" rel="noreferrer">Open live Homefinder <span aria-hidden="true">↗</span></a></div>
              <PhoneMockup src="/images/villages/homefinder-mobile-poster.jpg" videoSrc="/images/villages/homefinder-mobile-walkthrough.mp4" alt="Mobile Homefinder recording showing listing scroll, property details, expandable features, and the photo gallery" caption="Recorded from live Homefinder at a 390px mobile viewport. Press play to watch." />
            </div>
            <p className={styles.hint}>Scroll inside each phone to explore the full screen. You can also focus a phone and use the arrow keys.</p>
            <div className={styles.phoneGrid}>
              <PhoneMockup src="/images/villages/homefinder-mobile.png" alt="Homefinder mobile listing results" caption={<><strong>Browse</strong>Compare homes with search and map access close by.</>} />
              <PhoneMockup src="/images/villages/homefinder-mobile-filters.png" alt="Homefinder mobile search filters" caption={<><strong>Refine</strong>Focus on the criteria that matter to the search.</>} />
              <PhoneMockup src="/images/villages/homefinder-mobile-detail.png" alt="Homefinder mobile property details" caption={<><strong>Inspect</strong>Move from photos to home facts and contact actions.</>} />
            </div>
          </section>

          <section id="platform-strategy" className={`${styles.chapter} ${styles.split}`}>
            <div><p className="eyebrow">04 / Implementation</p><h2>One interface foundation across platforms.</h2></div>
            <div className={styles.copy}><p>The Angular micro-frontend gives the web and embedded mobile experience a shared foundation. Filters, listing cards, responsive behavior, and iconography follow the same product logic.</p><p>Working directly in the frontend let me resolve responsive details with engineering and carry the design through implementation.</p><div className={styles.platforms} aria-label="Implementation scope"><span>Angular micro-frontend</span><span>Responsive web</span><span>Embedded mobile</span></div></div>
          </section>

          <section id="contribution" className={`${styles.chapter} ${styles.split}`}>
            <div><p className="eyebrow">05 / My contribution</p><h2>From ambiguous requirements to working interfaces.</h2></div>
            <div className={styles.copy}><p>I clarified requirements with stakeholders, helped structure the property information, and designed the search, filter, and detail patterns. My contribution also included iconography, Angular implementation, and responsive refinement alongside the engineering team.</p><p>The result presented here is the public Homefinder experience, with one continuous path from discovery to evaluating a home.</p></div>
          </section>
          <div className={styles.next}><NextCaseStudy href="/work/parcel-pending" company="Parcel Pending by Quadient" title="A focused multilingual kiosk experience for self-service parcel pickup." /></div>
        </div>
      </main>
      <footer className="site-footer shell"><span>Jeremy Rivera / Product Designer</span></footer>
    </>
  );
}
