import { CaseStudyNavigation, NextCaseStudy } from "../../../components/CaseStudyNavigation";
import SiteHeader from "../../../components/SiteHeader";

const RESUME_URL = "/JeremyRiveraResume.pdf";

const workflowSteps = [
  {
    number: "01",
    title: "Set up the account and team",
    copy: "Give new customers a clear starting point, make collaboration visible, and surface letter and fund usage in the team dashboard.",
    poster: "/images/switch/account-setup.svg",
    video: "/images/switch/account-setup.webm",
  },
  {
    number: "02",
    title: "Import and verify contacts",
    copy: "Turn a bulk contact upload into a manageable address book, with USPS verification presented before customers commit to a mailing.",
    poster: "/images/switch/contact-import.svg",
    video: "/images/switch/contact-import.webm",
  },
  {
    number: "03",
    title: "Send mail in a guided flow",
    copy: "Connect document upload, sender and recipient details, print choices, mailing service, and the final send action in one understandable sequence.",
    poster: "/images/switch/send-mail.svg",
    video: "/images/switch/send-mail.webm",
  },
  {
    number: "04",
    title: "Manage mailing activity",
    copy: "Keep delivery status, account funds, payments, and reusable mailing lists accessible after a letter has been sent.",
    poster: "/images/switch/mailing-dashboard.svg",
    video: "/images/switch/mailing-dashboard.webm",
  },
];

const designPriorities = [
  {
    title: "Make the next action obvious",
    copy: "Each stage needed a clear primary action and enough context to move forward without learning postal terminology first.",
  },
  {
    title: "Build confidence before sending",
    copy: "Address verification, document details, service options, and cost information help customers catch expensive mistakes before submission.",
  },
  {
    title: "Carry clarity into operations",
    copy: "Tracking, team activity, funds, and mailing lists extend the experience beyond checkout into the daily work of managing mail.",
  },
];

export const metadata = {
  alternates: { canonical: "/work/switch" },
  title: "Switch by Quadient Case Study",
  description: "Designing a guided digital workflow for preparing, sending, and tracking physical business mail.",
};

export default function SwitchCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader resumeUrl={RESUME_URL} navBase="/" />

      <main id="main" className="case-study-page switch-case-study">
        <section className="case-hero shell" id="top">
          <a className="case-back" href="/#work">&larr; Back to selected work</a>
          <p className="eyebrow">Switch by Quadient / Digital mail SaaS</p>
          <h1>Turning physical mail into a guided digital workflow.</h1>
          <p className="case-lede">
            I designed across the Switch experience to help businesses prepare, send,
            and track physical mail without relying on printers, postage equipment,
            or repeated trips to the post office.
          </p>
          <div className="case-meta" aria-label="Project details">
            <div><span>Role</span><strong>Product design and UI systems</strong></div>
            <div><span>Scope</span><strong>Onboarding, sending, tracking, accounts</strong></div>
            <div><span>Period</span><strong>2022 to 2023</strong></div>
          </div>
          <CaseStudyNavigation sections={[
            ["context", "Context"],
            ["research", "Research"],
            ["workflow", "Core workflow"],
            ["design-priorities", "Design priorities"],
            ["contribution", "My contribution"],
          ]} />
        </section>

        <figure className="case-hero-image shell switch-case-hero">
          <img
            src="/images/switch/switch-mail-overview.png"
            alt="Switch interface showing mailing choices with certified and priority mail previews"
          />
          <figcaption>Publicly released Switch product imagery; no confidential artifacts are shown.</figcaption>
        </figure>

        <section id="context" className="case-section shell">
          <div className="case-section-heading">
            <p className="eyebrow">01 / Context</p>
            <h2>A familiar task with a surprising amount of operational complexity.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              Sending a business letter involves much more than uploading a file. Customers
              need accurate addresses, the right printing and mailing options, dependable
              payment, and visibility after the letter leaves their hands.
            </p>
            <p>
              Switch brought those dependencies into one browser-based service for First Class,
              Certified, and Priority Mail. The product challenge was to preserve that operational
              depth while making the experience feel straightforward and safe.
            </p>
          </div>
        </section>

        <section className="switch-evidence shell" aria-labelledby="switch-evidence-title">
          <div>
            <p className="eyebrow">Public product scale</p>
            <h2 id="switch-evidence-title">20K+ customers</h2>
          </div>
          <p>
            By March 2023, Quadient reported that more than 20,000 customers had signed up for
            Switch. At that scale, consistent guidance, error prevention, and clear status feedback
            were essential parts of the product experience.
          </p>
          <a
            href="https://mail.quadient.com/en-ca/news/20000_Customers_Signed_Up_for_Switch_Online_Mail_Platform"
            target="_blank"
            rel="noreferrer"
          >
            View Quadient&apos;s public announcement <span aria-hidden="true">&#8599;</span>
          </a>
        </section>

        <section id="research" className="case-section shell switch-competitive-section">
          <div className="case-section-heading">
            <p className="eyebrow">02 / Competitive frame</p>
            <h2>Learn from the market standard without copying its complexity.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              I reviewed Stamps.com as a key market reference, looking at established patterns
              for contact management, address verification, mailing-service selection, postage,
              and tracking. That analysis clarified both what customers would already recognize
              and where a browser-based workflow could feel more guided.
            </p>
            <p>
              Switch kept the operational safeguards people expected while organizing them around
              the task of sending a document. The goal was a clear sequence, not a feature-for-feature
              copy of an incumbent shipping tool.
            </p>
            <a className="case-source-link" href="https://www.stamps.com/download/" target="_blank" rel="noreferrer">
              View the Stamps.com product reference <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </section>

        <section id="workflow" className="case-product-section switch-workflow-section">
          <div className="shell">
            <div className="case-section-heading">
              <p className="eyebrow">03 / Core workflow</p>
              <h2>Four connected stages from setup to delivery tracking.</h2>
            </div>
            <p className="case-product-intro">
              My work spanned the product&apos;s connected account, contact, document,
              mailing, payment, and reporting experiences. These publicly released interface
              walkthroughs show the breadth of that system.
            </p>
            <div className="switch-workflow-grid">
              {workflowSteps.map((step) => (
                <article className="switch-workflow-card" key={step.title}>
                  <div className="switch-workflow-media">
                    <video
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      poster={step.poster}
                      aria-label={`${step.title} interface walkthrough`}
                    >
                      <source src={step.video} type="video/webm" />
                      Your browser does not support embedded video.
                    </video>
                  </div>
                  <div className="switch-workflow-copy">
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="design-priorities" className="case-section shell switch-priorities-section">
          <div className="case-section-heading">
            <p className="eyebrow">04 / Design priorities</p>
            <h2>Use clarity to reduce risk across the mailing journey.</h2>
          </div>
          <div className="switch-priority-list">
            {designPriorities.map((priority) => (
              <article key={priority.title}>
                <h3>{priority.title}</h3>
                <p>{priority.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contribution" className="case-section shell switch-contribution-section">
          <div className="case-section-heading">
            <p className="eyebrow">05 / Contribution</p>
            <h2>A product designer working across the complete service.</h2>
          </div>
          <div className="case-section-copy">
            <p>
              I owned UI design across onboarding, document preparation, address verification,
              mailing choices, payment, account management, and reporting. The connected scope
              required reusable patterns and close collaboration with engineering so improvements
              remained practical to build and consistent in production.
            </p>
            <p>
              The result is a strong example of the work I do best: making a complex operational
              system feel understandable without stripping away the controls people need.
            </p>
          </div>
        </section>

        <NextCaseStudy
          href="/work/payro"
          company="Payro Finance"
          title="A responsive customer portal and design system for payroll financing."
        />
      </main>

      <footer className="site-footer shell">
        <span>Jeremy Rivera / Product Designer</span>
      </footer>
    </>
  );
}
