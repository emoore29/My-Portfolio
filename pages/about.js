import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutContent}>
        <p>
          My name is Emma, and I live in Perth, Western Australia. I currently
          work as a freelance transcriptionist and editor, and I do a lot of
          programming in my spare time. My goal is to continue learning new
          skills, work on meaningful projects, and build a fulfilling career in
          technology.
        </p>
        <p>
          Outside of work and programming, I enjoy running, drawing, and
          spending time with friends and family. I'm a big fan of{" "}
          <a href="https://critrole.com/" target="_blank">
            Critical Role
          </a>{" "}
          and emergent narrative in games. In 2019, I fostered a staffy named
          Razzy who went on to find his forever home. I now have a cat named
          Penny who adopted me and my partner and doesn't like it when I spend
          too long at my PC.
        </p>
        <p>
          I designed and developed this website and it is a continual work in
          progress. The illustrations you see on my website are made by{" "}
          <a href="https://www.transhumans.xyz/about" target="_blank">
            Pablo Stanley
          </a>
          , who generously shares their art for free.
        </p>
        <figure className={styles.illustration}>
          <img
            src="/images/puppy-transhumans.png"
            alt="A girl hugging a puppy."
          />
          <figcaption className={styles.caption}>
            <a href="https://www.transhumans.xyz/about">By Pablo Stanley</a>
          </figcaption>
        </figure>
      </div>
    </Layout>
  );
}
