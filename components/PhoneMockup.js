import Image from "next/image";
import styles from "./PhoneMockup.module.css";

export default function PhoneMockup({ src, alt, caption, animatedSrc, videoSrc }) {
  return (
    <figure className={styles.figure}>
      <div className={styles.device}>
        <div className={styles.chrome} aria-hidden="true"><span /></div>
        <div className={styles.screen} tabIndex={videoSrc ? undefined : 0} role="region" aria-label={videoSrc ? alt : `${alt}. Scroll to explore the screen.`}>
          {videoSrc ? (
            <video controls playsInline preload="metadata" poster={src} aria-label={alt}>
              <source src={videoSrc} type="video/mp4" />
              <a href={videoSrc}>Watch the mobile Homefinder walkthrough</a>
            </video>
          ) : animatedSrc ? (
            <picture>
              <source media="(prefers-reduced-motion: no-preference)" srcSet={animatedSrc} type="image/webp" />
              <img src={src} alt={alt} width="360" height="1100" loading="lazy" />
            </picture>
          ) : <Image src={src} alt={alt} width={360} height={1100} sizes="(max-width: 600px) 260px, 280px" />}
        </div>
        <div className={styles.homeIndicator} aria-hidden="true" />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
