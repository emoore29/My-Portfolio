import styles from "../styles/layout.module.css";
import GitHubIcon from "./icons/gitHubIcon";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContent}>
        <div className={styles.socials}>
          <a target="_blank" href="https://github.com/emoore29">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/emoore29" target="_blank">
            <Image
              className={styles.socialsImg}
              src="/images/linkedInIcon.png"
              height={27}
              width={30}
              alt="Linkedin icon"
            />
          </a>
        </div>
        <p className={styles.copyright}>© Emma Moore 2024</p>
      </section>
    </footer>
  );
}
