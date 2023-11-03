import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <h2
        id="about"
        className={`${utilStyles.headingMd} ${styles.aboutHeading}`}
      >
        About
      </h2>
      <p className={styles.aboutContent}>
        A web developer with experience primarily in frontend React and
        interests in UI/UX, backend integration, and learning other
        technologies.
      </p>
    </Layout>
  );
}
