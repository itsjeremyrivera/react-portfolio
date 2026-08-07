import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import ParallaxController from "../../components/ParallaxController";
import styles from "./about.module.css";

const RESUME_URL = "/JeremyRiveraResume.pdf";

export const metadata = {
  title: "About",
  description:
    "Jeremy Rivera's path from an old Macintosh Plus to product design, front-end development, and human-centered digital products.",
};

function Photo({ src, alt, sizes, priority = false, className = "" }) {
  return (
    <div className={`${styles.photo} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={styles.photoImage}
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader resumeUrl={RESUME_URL} navBase="/" />
      <ParallaxController />

      <main id="main" className={styles.page}>
        <section className={`shell ${styles.hero}`} id="top">
          <div
            className={`${styles.heroGlow} parallax-layer`}
            data-parallax
            data-parallax-speed="-18"
            aria-hidden="true"
          />
          <div
            className={`${styles.heroCopy} parallax-layer parallax-copy-layer`}
            data-parallax
            data-parallax-speed="16"
          >
            <p className="eyebrow">A little more about me</p>
            <h1>Technology has felt like home for as long as I can remember.</h1>
            <p>
              Both sides of my family worked in medicine. My dad would sit me in
              front of an old Macintosh Plus, where I played virtual knee-replacement
              games, explored the terminal, and used Paint to make whatever came to
              mind. That mix of systems and creative freedom never left me.
            </p>
          </div>
          <div
            className={`${styles.heroPortrait} parallax-layer parallax-media-layer`}
            data-parallax
            data-parallax-speed="-20"
          >
            <Photo
              src="/images/about/jeremy-travel-portrait.webp"
              alt="Jeremy smiling on a sunny trail with mountains behind him"
              sizes="(max-width: 900px) 100vw, 43vw"
              priority
              className={styles.portraitPhoto}
            />
            <span className={styles.photoNote}>A good day outside.</span>
          </div>
        </section>

        <section className={`shell section scroll-scene ${styles.storySection}`} data-parallax data-parallax-speed="0">
          <div
            className={`${styles.sectionCopy} parallax-layer parallax-copy-layer`}
            data-parallax
            data-parallax-speed="18"
          >
            <p className="eyebrow">How I got here</p>
            <h2>I taught myself design and code because I genuinely love making things.</h2>
            <p>
              Growing up in NYC taught me to move fast and pay attention. I also
              grew up quickly helping with my sister, who has a disability.
              Technology became a space where I could feel grounded, control what I
              could, and still break boundaries through creativity.
            </p>
          </div>
          <div
            className={`${styles.wideMedia} parallax-layer parallax-media-layer`}
            data-parallax
            data-parallax-speed="22"
          >
            <Photo
              src="/images/about/desk-setup.webp"
              alt="Jeremy's desk setup with multiple displays and blue and purple lighting"
              sizes="(max-width: 900px) 100vw, 76vw"
              className={styles.widePhoto}
            />
          </div>
        </section>

        <section className={`section ${styles.inverseSection}`}>
          <div className={`shell ${styles.lifeGrid}`}>
            <div className={styles.lifeCopy}>
              <div
                className={`${styles.lifeCopyMotion} parallax-layer parallax-copy-layer`}
                data-parallax
                data-parallax-speed="18"
              >
                <p className="eyebrow">What shapes my eye</p>
                <h2>People first. Systems underneath. A little skate-culture edge.</h2>
                <p>
                  My brain works pretty programmatically: I&apos;m always looking at how
                  a product was made, who it helps, and how it could work better.
                  <em> The Design of Everyday Things</em> gave language to that instinct.
                  Skating and skate culture taught me to bring personality and visual
                  energy to the way I solve problems.
                </p>
              </div>
            </div>

            <figure
              className={`${styles.lifeCard} ${styles.coupleCard} parallax-layer parallax-media-layer`}
              data-parallax
              data-parallax-speed="-16"
            >
              <Photo
                src="/images/about/couple-by-the-coast.webp"
                alt="Jeremy and his partner together by a tropical coast"
                sizes="(max-width: 700px) 100vw, 48vw"
                className={styles.cardPhoto}
              />
              <figcaption>Puerto Rico with my girlfriend.</figcaption>
            </figure>

            <figure
              className={`${styles.lifeCard} ${styles.travelCard} parallax-layer parallax-media-layer`}
              data-parallax
              data-parallax-speed="18"
            >
              <Photo
                src="/images/about/travel-pagoda.webp"
                alt="A palace at Disney framed by trees on a clear day"
                sizes="(max-width: 700px) 100vw, 34vw"
                className={styles.cardPhoto}
              />
              <figcaption>A palace view from a day at Disney.</figcaption>
            </figure>

            <figure
              className={`${styles.lifeCard} ${styles.animeCard} parallax-layer parallax-media-layer`}
              data-parallax
              data-parallax-speed="-12"
            >
              <Photo
                src="/images/about/anime-display.webp"
                alt="A detailed Zoro figure at Comic Con"
                sizes="(max-width: 700px) 100vw, 34vw"
                className={styles.cardPhoto}
              />
              <figcaption>Zoro at Comic Con.</figcaption>
            </figure>
          </div>
        </section>

        <section className={`shell section scroll-scene ${styles.dogsSection}`} data-parallax data-parallax-speed="0">
          <div
            className={`${styles.sectionCopy} parallax-layer parallax-copy-layer`}
            data-parallax
            data-parallax-speed="18"
          >
            <h2>Home has always been better with these two around.</h2>
            <p>
              Koda boi is the black dog. Flash is the golden retriever. Flash passed
              away, but I love this photo and wanted him to have a place here too.
            </p>
          </div>
          <div className={styles.dogGrid}>
            <div className="parallax-layer parallax-media-layer" data-parallax data-parallax-speed="16">
              <Photo
                src="/images/about/koda-closeup.webp"
                alt="Koda boi, Jeremy's black dog, smiling on a yellow cushion"
                sizes="(max-width: 700px) 100vw, 47vw"
                className={styles.dogPhoto}
              />
            </div>
            <div className="parallax-layer parallax-media-layer" data-parallax data-parallax-speed="-14">
              <Photo
                src="/images/about/golden-dog.webp"
                alt="Flash, Jeremy's golden retriever, looking closely at the camera"
                sizes="(max-width: 700px) 100vw, 47vw"
                className={styles.dogPhoto}
              />
            </div>
          </div>
        </section>

        <section className={`shell ${styles.closing}`}>
          <h2>Now you know the person behind the case studies.</h2>
          <div className={styles.closingActions}>
            <Link className="button primary" href="/#work">View selected work <span aria-hidden="true">→</span></Link>
            <a className="button secondary" href={RESUME_URL} target="_blank" rel="noreferrer">View résumé PDF</a>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <span>Jeremy Rivera / Product Designer</span>
      </footer>
    </>
  );
}
