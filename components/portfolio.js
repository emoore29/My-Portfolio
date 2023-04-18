import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

export default function Portfolio() {
  return (
    <section>
      <h2 id="portfolio" className={utilStyles.headingLg}>
        Portfolio
      </h2>
      <div className={styles.portfolioGrid}>
        <div>test 1</div>
        <div>test 2</div>
        <div>test 3</div>
        <div>test 4</div>
      </div>
    </section>
  );
}
