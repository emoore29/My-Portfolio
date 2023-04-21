import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import HoverBlur from "./hoverBlur";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const projectLinks = {
    artPortfolio: {
      github: "https://github.com/AthenasCode",
      live: "https://donnapriceart.com/",
    },
    pomodoroTimer: {
      github: "https://github.com/AthenasCode/Pomodoro",
      live: "https://athenascode.github.io/Pomodoro/",
    },
    ratingsComponent: {
      github: "https://github.com/AthenasCode/Interactive-Rating-Component",
      live: "https://athenascode.github.io/Interactive-Rating-Component/",
    },
    cardDetails: {
      github: "https://github.com/AthenasCode/Interactive-Card-Details-Form",
      live: "https://athenascode.github.io/Interactive-Card-Details-Form/",
    },
  };

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
          <HoverBlur
            isActive={activeProject === "artPortfolio"}
            links={projectLinks.artPortfolio}
          />
        </div>
        <div
          id="cardDetails"
          onMouseOver={() => setActiveProject("cardDetails")}
          onMouseOut={() => setActiveProject(null)}
          className={styles.projectContainer}
        >
          <div id="project-image" className={styles.projectImageParent}>
            <Image
              src="/images/interactive-card-details-screenshot.jpg"
              fill
              className={utilStyles.objectContain}
              alt="Interactive Card Details"
            />
          </div>
          <p>Interactive Card Details Form</p>
          <p>A form that displays card details as the user types.</p>
          <HoverBlur
            isActive={activeProject === "cardDetails"}
            links={projectLinks.cardDetails}
          />
        </div>
        <div
          id="pomodoroTimer"
          onMouseOver={() => setActiveProject("pomodoroTimer")}
          onMouseOut={() => setActiveProject(null)}
          className={styles.projectContainer}
        >
          <div id="project-image" className={styles.projectImageParent}>
            <Image
              src="/images/pomo-screenshot.jpg"
              fill
              className={utilStyles.objectContain}
              alt="Pomodoro Timer"
            />
          </div>
          <p>Pomodoro Timer</p>
          <p>A minimal, customisable timer.</p>
          <HoverBlur
            isActive={activeProject === "pomodoroTimer"}
            links={projectLinks.pomodoroTimer}
          />
        </div>
        <div
          id="ratingsComponent"
          onMouseOver={() => setActiveProject("ratingsComponent")}
          onMouseOut={() => setActiveProject(null)}
          className={styles.projectContainer}
        >
          <div id="project-image" className={styles.projectImageParent}>
            <Image
              src="/images/interactive-rating-component-screenshot.jpg"
              fill
              className={utilStyles.objectContain}
              alt="Interactive Rating Component"
            />
          </div>
          <p>Interactive Rating Component</p>
          <p>A small interactive component.</p>
          <HoverBlur
            isActive={activeProject === "ratingsComponent"}
            links={projectLinks.ratingsComponent}
          />
        </div>
      </div>
    </section>
  );
}
