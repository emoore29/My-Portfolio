import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Layout>
      <p className={styles.aboutContent}>
        Welcome to my website!
        <br />
        <br />
        I'm a web developer based in Perth, Australia. I enjoy building things
        that are a combination of creative and practical. In my spare time, I
        enjoy running, drawing, and spending time with friends and family. Here,
        you can find my work and a collection of "notes", mostly about web
        development.
      </p>
    </Layout>
  );
}
