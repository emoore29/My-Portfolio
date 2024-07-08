import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutContent}>
        <p>
          My name is Emma, and I live in Perth, Western Australia. I currently
          work as a document editor and writer, working on a range of documents
          from legal transcripts to research manuscripts. I enjoy learning about
          technology and have worked on a variety of web development and home
          networking projects.
        </p>

        <p>
          Outside of work and programming, I enjoy running, drawing, and
          spending time with friends and family. I love animals and between 2018
          and 2019 I fostered six dogs. I currently have a cat named Penny.
        </p>
        <p>
          I designed and developed this website. The artwork you see on my
          website is made by{" "}
          <a href="https://www.transhumans.xyz/about" target="_blank">
            Pablo Stanley
          </a>
          .
        </p>
        <figure className={styles.illustration}>
          <img
            src="/images/puppy-transhumans.png"
            alt="A girl hugging a puppy."
          />
          <figcaption className={styles.caption}>
            <a href="https://www.transhumans.xyz/about">Transhumans</a>
          </figcaption>
        </figure>
      </div>
    </Layout>
  );
}
