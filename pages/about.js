import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutContent}>
        <p>
          Welcome to my website! I'm a web developer based in Perth, Australia.
          I enjoy building things that are both creative and practical. I've
          also always loved puzzle games and problem solving. It's probably some
          combination of these things that led me to web development. Here, you
          can find my work and a collection of "notes", mostly about web
          development.
        </p>
        <p>
          Outside of web development, I enjoy running, drawing, and spending
          time with friends and family. I'm a big fan of{" "}
          <a href="https://critrole.com/" target="_blank">
            Critical Role
          </a>{" "}
          and emergent narrative in games. In 2019, I fostered a staffy named
          Razzy who went on to find his forever home. I now have a cat named
          Penny who adopted me and my partner and doesn't like it when I spend
          too long at my PC.
        </p>
        <p>
          The illustrations you see on my website are made by{" "}
          <a href="https://www.transhumans.xyz/about" target="_blank">
            Pablo Stanley
          </a>
          , who generously shares their art for free. I designed and built the
          website and logo myself.
        </p>
        <figure className={styles.aboutImg}>
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
