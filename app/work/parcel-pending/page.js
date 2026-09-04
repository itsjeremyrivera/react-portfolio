import Image from "next/image";
import SiteHeader from "../../../components/SiteHeader";
import KioskPreview from "../../../components/KioskPreview";
import { CaseStudyNavigation, NextCaseStudy } from "../../../components/CaseStudyNavigation";
import styles from "../../../components/CasePresentation.module.css";

export const metadata = {
  alternates: { canonical: "/work/parcel-pending" },
  title: "Parcel Pending by Quadient Case Study",
  description: "Designing clear code entry, touchscreen interactions, and localized states for a self-service parcel pickup kiosk.",
};

const decisions = [
  ["Keep the task visible", "The code field, numeric keypad, and Enter action form one clear sequence. The barcode option stays alongside the instruction."],
  ["Design for a standing interaction", "Large numeric targets, concise directions, and a clear input boundary support a short interaction at a public touchscreen."],
  ["Preserve the pattern across languages", "English and Spanish use the same field, keypad, help placement, and forward action. The language changes within a familiar layout."],
];

export default function ParcelPendingCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader resumeUrl="/JeremyRiveraResume.pdf" navBase="/" />
      <main id="main" className={styles.page}>
        <div className={styles.wrap}>
          <header className={styles.intro} id="top">
            <a className={styles.back} href="/#work">← Selected work</a>
            <p className="eyebrow">Parcel Pending by Quadient</p>
            <h1>From pickup code to parcel, with less friction.</h1>
            <p className={styles.lede}>I designed the kiosk interaction around a clear resident goal: enter or scan a pickup code, retrieve the parcel, and get on with the day.</p>
            <dl className={styles.meta}>
              <div><dt>My role</dt><dd>UX/UI design</dd></div>
              <div><dt>Scope</dt><dd>Kiosk interaction + localization</dd></div>
              <div><dt>Period</dt><dd>2022 to 2023</dd></div>
            </dl>
          </header>
          <figure className={`${styles.stage} ${styles.parcelStage}`}>
            <div className={styles.parcelStageCopy}>
              <Image src="/images/parcel-pending/logo.png" alt="Parcel Pending" width={538} height={62} sizes="220px" priority />
              <h2>A small screen.<br />A clear next step.</h2>
              <p>Code entry and a familiar keypad keep the pickup task in focus.</p>
            </div>
            <div className={styles.kioskAngle}><KioskPreview /></div>
          </figure>
          <p className={styles.caption}>Interface reconstruction from production captures. Original installation photos are included below.</p>
          <div className={styles.contents}><CaseStudyNavigation sections={[["strategy", "The task"], ["production-flow", "Pickup flow"], ["localization", "Localization"], ["design-decisions", "Design decisions"], ["contribution", "My contribution"]]} /></div>

          <section id="strategy" className={`${styles.chapter} ${styles.split}`}>
            <div><p className="eyebrow">01 / The task</p><h2>Help people finish what they came to do.</h2></div>
            <div className={styles.copy}><p>Residents arrive at the locker with a pickup code received by email or SMS. The kiosk connects that notification to a physical pickup.</p><p>I focused the interface on the information needed at that moment: what to have ready, where to enter it, and how to continue. Secondary controls remain available without competing with the pickup task.</p></div>
          </section>

          <section id="production-flow" className={styles.chapter}>
            <p className="eyebrow">02 / Pickup flow</p><h2>A short path from notification to collection.</h2>
            <div className={styles.steps}>
              <article><span>01 / Prepare</span><h3>Have the code ready</h3><p>The welcome instructions explain that pickup requires the code received by email or SMS.</p></article>
              <article><span>02 / Enter</span><h3>Type or scan</h3><p>The primary screen centers code entry, a numeric keypad, and the barcode alternative.</p></article>
              <article><span>03 / Collect</span><h3>Retrieve the parcel</h3><p>The instructions set expectations before the door opens, including that pickup codes cannot be reused.</p></article>
            </div>
          </section>

          <section id="localization" className={styles.chapter}>
            <div className={styles.split}><div><p className="eyebrow">03 / Localization</p><h2>Change the language. Keep the interaction familiar.</h2></div><p className={styles.copy}>The English and Spanish states preserve the same hierarchy and keypad arrangement. Longer instructions fit within the layout while the main task stays in the same place.</p></div>
            <div className={styles.languagePair}>
              <figure><KioskPreview /><figcaption>English / Code entry</figcaption></figure>
              <figure><KioskPreview language="es" /><figcaption>Español / Introducir código</figcaption></figure>
            </div>
            <p className={styles.caption}>Reconstructed interface states based on the photographed production screens.</p>
          </section>

          <section id="design-decisions" className={`${styles.chapter} ${styles.split}`}>
            <div><p className="eyebrow">04 / Design decisions</p><h2>Give each element a clear job.</h2></div>
            <div>{decisions.map(([title, copy], i) => <article className={styles.decision} key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
          </section>

          <section className={`${styles.chapter} ${styles.split}`} aria-labelledby="production-heading">
            <div><p className="eyebrow">In the field</p><h2 id="production-heading">The interface in its everyday setting.</h2><p className={styles.copy}>These original photos show the locker installation and its production code-entry screen. They document the physical context behind the interface.</p></div>
            <div className={styles.evidence}>
              <figure><Image src="/images/parcel-pending/parcel-lockers-field.webp" alt="Parcel Pending locker installation photographed on location" width={405} height={540} sizes="(max-width: 760px) 42vw, 280px" /><figcaption>The locker installation.</figcaption></figure>
              <figure><Image src="/images/parcel-pending/kiosk-code-entry-en.webp" alt="Original photograph of the English Parcel Pending kiosk code-entry screen" width={360} height={480} sizes="(max-width: 760px) 42vw, 280px" /><figcaption>The production kiosk interface.</figcaption></figure>
            </div>
          </section>

          <section id="contribution" className={`${styles.chapter} ${styles.split}`}>
            <div><p className="eyebrow">05 / My contribution</p><h2>Connecting a digital task to a physical service.</h2></div>
            <div className={styles.copy}><p>My work centered on task framing, code entry, touchscreen hierarchy, and localized states. The design connected the resident&apos;s pickup notification to the interaction at the locker.</p><p>The central design decision was to keep the experience focused, with the controls and instructions needed to complete a brief, repeatable task.</p></div>
          </section>
          <div className={styles.next}><NextCaseStudy href="/work/switch" company="Switch by Quadient" title="Turning physical mail into a guided digital workflow." /></div>
        </div>
      </main>
      <footer className="site-footer shell"><span>Jeremy Rivera / Product Designer</span></footer>
    </>
  );
}
