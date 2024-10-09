import Layout from "../components/layout";
import styles from "../styles/about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutContent}>
        <p className={styles.aboutText}>
          Hi! I'm Emma, and I live in Perth, Western Australia. I started coding
          in 2022 as a hobby. I did some free courses with freeCodeCamp and
          learned HTML, CSS, JavaScript, Python, and more. I started building
          various websites with React-based frameworks (you can view some of
          these projects at <Link href="/">my work</Link>, and/or{" "}
          <a href="https://github.com/emoore29" target="_blank">
            my GitHub
          </a>
          ) and self-studying things like logic gates and computer networking.
          <br />
          <br />
          Although I've worked in the editing field for the past several years,
          I felt much more drawn to building things and solving problems with
          code. I wanted to expand my experience and improve my foundational
          understanding of computer science, as well as have a qualification to
          demonstrate my knowledge on paper, so I decided to pursue a more
          formal education in IT. I'm currently completing a Graduate Diploma in
          Information Technology, estimated to finish by September 2025.
        </p>
        <figure className={styles.illustration}>
          <img
            src="/images/transhumans-puppy.png"
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
