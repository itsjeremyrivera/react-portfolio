import Image from "next/image";
import styles from "./KioskPreview.module.css";

export default function KioskPreview({ language = "en" }) {
  const spanish = language === "es";
  return (
    <div className={styles.device} role="img" aria-label={`Reconstructed Parcel Pending ${spanish ? "Spanish" : "English"} kiosk screen showing code entry and a numeric keypad`}>
      <div className={styles.screen} aria-hidden="true" lang={language}>
        <div className={styles.header}>
          <Image src="/images/parcel-pending/logo.png" alt="" width={538} height={62} sizes="160px" />
          <span>文 A</span><span className={styles.help}>?</span>
        </div>
        <div className={styles.content}>
          <strong>{spanish ? "Bienvenido a Kiosk A" : "Welcome to Kiosk A"}</strong>
          <p>{spanish ? "Introduce tu código o escanea tu código de barras" : "Enter your code, or scan your barcode"}</p>
          <div className={styles.input} />
          <div className={styles.keypad}>
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "DEL", "0", "⌫"].map(key => <span key={key}>{key}</span>)}
          </div>
          <span className={styles.enter}>{spanish ? "ENTRAR" : "ENTER"}</span>
        </div>
        <div className={styles.footer}>Parcel Pending by Quadient</div>
      </div>
    </div>
  );
}
