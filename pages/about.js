import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutContent}>
        <p className={styles.aboutText}>
          My name is Emma, and I live in Perth, Western Australia. I currently
          work as a document editor in legal transcription. In 2022 I started
          coding as a hobby, and I'm currently completing a Graduate Diploma in
          Information Technology, which I'm aiming to complete by September
          2025.
        </p>
        <figure className={styles.illustration}>
          <img
            src="/images/puppy-transhumans.png"
            alt="Drawing of a girl cuddling a puppy."
          />
          <figcaption className={styles.caption}>
            <a href="https://www.transhumans.xyz/about">Transhumans</a>
          </figcaption>
        </figure>
      </div>
    </Layout>
  );
}
