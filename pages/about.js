import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <p className={styles.aboutContent}>
        Hi, I'm Emma!
        <br />
        <br />
        I'm a web developer with experience primarily in frontend React and
        interests in UI/UX, backend integration, and learning other
        technologies.
        <br />
        <br />
        In my spare time I enjoy video games, running, and spending time with
        family.
      </p>
    </Layout>
  );
}
