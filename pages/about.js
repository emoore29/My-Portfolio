import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutContent}>
        <p>
          My name is Emma, and I live in Perth, Western Australia. I'm an
          experienced document editor, working on a range of documents from
          legal transcripts to research manuscripts.
        </p>
        <p>
          In 2022, I became interested in learning programming as a hobby, and
          after spending some time creating various projects, I decided to take
          it seriously as a career path. I'm currently completing a Graduate
          Diploma in Information Technology, which I hope to complete by
          September 2024.
        </p>
        <p>
          Outside of work and programming, I enjoy running, drawing, and
          spending time with friends and family. I love animals; between 2018
          and 2019 I fostered and rehomed six shelter dogs. In 2020, my partner
          and I adopted a cat named Penny.
        </p>
        <p>
          I designed and developed this website. Artwork is by{" "}
          <a href="https://www.transhumans.xyz/about" target="_blank">
            Pablo Stanley
          </a>
          .
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
