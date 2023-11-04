import styles from "../styles/layout.module.css";
import GhIcon from "./icons/gitHubIcon";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.socialsFooter}>
      {/* <WaveSvg /> */}
      <section className={styles.logoSection}>
        <a target="_blank" href="https://github.com/AthenasCode">
          <GhIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/emma-moore-063608b0/"
          target="_blank"
        >
          <Image
            className={styles.socialsImg}
            src="/images/LI-In-Bug.png"
            height={27}
            width={30}
            alt="Linkedin icon"
          />
        </a>
      </section>
    </footer>
  );
}
