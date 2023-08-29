import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import HoverBlur from "./hoverBlur";
import { lora } from "../styles/fonts";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const projectLinks = {
    artPortfolio: {
      github: null,
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
    manuscriptApp: {
      github: "https://github.com/ShayneJG/Manuscript-Manager",
      live: "https://manuscript-manager.vercel.app/",
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
          <p className={`${styles.projectTitle}`}>
            Art Portfolio | HTML, CSS, JS
          </p>
          <p
            className={`${utilStyles.italic} ${lora.className} ${styles.projectDescription}`}
          >
            A six-page static website.
          </p>
          <HoverBlur
            isActive={activeProject === "artPortfolio"}
            links={projectLinks.artPortfolio}
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
          <p className={`${styles.projectTitle}`}>Pomodoro Timer | React</p>
          <p
            className={`${utilStyles.italic} ${lora.className} ${styles.projectDescription}`}
          >
            A minimal, customisable timer.
          </p>
          <HoverBlur
            isActive={activeProject === "pomodoroTimer"}
            links={projectLinks.pomodoroTimer}
          />
        </div>
        <div
          id="manuscriptApp"
          onMouseOver={() => setActiveProject("manuscriptApp")}
          onMouseOut={() => setActiveProject(null)}
          className={styles.projectContainer}
        >
          <div className={styles.projectImageParent}>
            <Image
              src="/images/manuscript-manager-screenshot.png"
              fill
              className={`${utilStyles.objectContain} ${styles.projectImage}`}
              alt="Manuscript Manager Screenshot"
            />
          </div>
          <p className={`${styles.projectTitle}`}>
            Manuscript Manager | Next.js, AuthO
          </p>
          <p
            className={`${utilStyles.italic} ${lora.className} ${styles.projectDescription}`}
          >
            A collaborative project for an app that tracks monthly freelance
            earnings.
          </p>
          <HoverBlur
            isActive={activeProject === "manuscriptApp"}
            links={projectLinks.manuscriptApp}
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
          <p className={`${styles.projectTitle}`}>
            Interactive Card Details Form | Tailwind, React
          </p>
          <p
            className={`${utilStyles.italic} ${lora.className} ${styles.projectDescription}`}
          >
            A form that displays card details as the user types.
          </p>
          <HoverBlur
            isActive={activeProject === "cardDetails"}
            links={projectLinks.cardDetails}
          />
        </div>
      </div>
    </section>
  );
}
