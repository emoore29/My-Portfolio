import styles from "../styles/layout.module.css";
import GhIcon from "./icons/gitHubIcon";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContent}>
        <p>
          <em>Emma Moore 2024</em>
        </p>
        <div className={styles.socials}>
          <a target="_blank" href="https://github.com/emoore29">
            <GhIcon />
          </a>
          <a href="https://www.linkedin.com/in/emoore29" target="_blank">
            <Image
              className={styles.socialsImg}
              src="/images/LI-In-Bug.png"
              height={27}
              width={30}
              alt="Linkedin icon"
            />
          </a>
        </div>
      </section>
    </footer>
  );
}
