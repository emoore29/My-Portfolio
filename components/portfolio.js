import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import HoverBlur from "./hoverBlur";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className={styles.portfolioContainer}>
      <h2 id="portfolio" className={utilStyles.headingMd}>
        Portfolio
      </h2>
      <div className={styles.portfolioGrid}>
        <div
          id="artPortfolio"
          onMouseOver={() => setActiveProject("artPortfolio")}
          onMouseOut={() => setActiveProject(null)}
          className={styles.projectContainer}
        >
          <div className={styles.projectImageParent}>
            <Image
              src="/images/dp-portfolio-screenshot.jpg"
              fill
              className={`${utilStyles.objectContain} ${styles.projectImage}`}
              alt="Art Portfolio"
            />
          </div>
          <p>Art Portfolio</p>
          <p>A six-page static website built with HTML, CSS, and JS.</p>
          <HoverBlur isActive={activeProject === "artPortfolio"} />
        </div>
        <div
          id="pomodoroTimer"
          onMouseOver={() => setActiveProject("pomodoroTimer")}
          onMouseOut={() => setActiveProject(null)}
          className={styles.projectContainer}
        >
          <div id="project-image" className={styles.projectImageParent}>
            <Image
              src="/images/pomodoro-screenshot.jpg"
              fill
              className={utilStyles.objectContain}
              alt="Pomodoro Timer"
            />
          </div>
          <p>Pomodoro Timer</p>
          <p>A minimal, customisable timer.</p>
          <HoverBlur isActive={activeProject === "pomodoroTimer"} />
        </div>
        <div
          id="mernApp"
          onMouseOver={() => setActiveProject("mernApp")}
          onMouseOut={() => setActiveProject(null)}
          className={styles.projectContainer}
        >
          <div id="project-image" className={styles.projectImageParent}>
            <Image
              src="/images/manuscript-app-screenshot.jpg"
              fill
              className={utilStyles.objectContain}
              alt="Statistics App"
            />
          </div>
          <p>Freelance Work Tracker</p>
          <p>A MERN App designed to keep record of freelance earnings.</p>
          <HoverBlur isActive={activeProject === "mernApp"} />
        </div>
      </div>
    </section>
  );
}
