import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Layout>
      <p className={styles.aboutContent}>
        Welcome!
        <br />
        <br />
        I'm a web developer based in Perth, Australia. I enjoy building things
        that are some combination of creative and practical. In my spare time, I
        enjoy running, drawing, and spending time with friends and family. Here,
        you can find my work and a collection of "notes", mostly about web
        development.
        <br />
        <br />I build websites, predominantly on the front end with React. I'm
        interested in UI/UX, backend integration, and exploring new languages
        and technologies.
      </p>
    </Layout>
  );
}
