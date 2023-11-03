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
        Hi, I'm Emma! I'm a web developer with experience primarily in frontend
        React and interests in UI/UX, backend integration, and learning other
        technologies. <br />
        <br />I started teaching myself programming in 2022, seeking a hobby
        that felt useful and challenging. Outside of programming, I enjoy video
        games, running, and spending time with family.
      </p>
    </Layout>
  );
}
