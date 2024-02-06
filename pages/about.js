import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <Layout>
      <p className={styles.aboutContent}>
        Welcome to my website!
        <br />
        <br />
        <strong>About me</strong>
        <br />
        <br />
        Here you can find my portfolio and a collection of "notes" about what
        I'm learning working as a web developer.
        <br />
        <br />
        <strong>What do I do?</strong>
        <br />
        <br />
        I build websites, predominantly on the front end with React. I'm
        interested in UI/UX, backend integration, and exploring new languages
        and technologies.
        <br />
        <br />
        With my own projects, I like experimenting and trying to think outside
        the box. If you would like to know more about me and my story, I've
        written a blog post about it <a href="">here</a>.
      </p>
    </Layout>
  );
}
