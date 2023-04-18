import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section>
      <h2 id="portfolio" className={utilStyles.headingMd}>
        Portfolio
      </h2>
      <div className={styles.portfolioGrid}>
        <div className={styles.projectContainer}>
          <div className={styles.projectImageParent}>
            <Image
              src="/images/dp-portfolio-screenshot.jpg" // Route of the image file
              fill
              className={`${utilStyles.objectContain} ${styles.projectImage}`}
              alt="Art Portfolio"
            />
          </div>
          <p>Art Portfolio</p>
          <p>A six-page static website built with HTML, CSS, and JS.</p>
        </div>
        <div className={styles.projectContainer}>
          <div id="project-image" className={styles.projectImageParent}>
            <Image
              src="/images/pomodoro-screenshot.jpg" // Route of the image file
              fill
              className={utilStyles.objectContain}
              alt="Pomodoro Timer"
            />
          </div>
          <p>Pomodoro Timer</p>
          <p>A minimal, customisable timer.</p>
        </div>

        <div className={styles.projectContainer}>
          <div id="project-image" className={styles.projectImageParent}>
            <Image
              src="/images/manuscript-app-screenshot.jpg" // Route of the image file
              fill
              className={utilStyles.objectContain}
              alt="Statistics App"
            />
          </div>
          <p>Freelance Work Tracker</p>
          <p>A MERN App designed to keep record of freelance earnings.</p>
        </div>
      </div>
    </section>
  );
}
