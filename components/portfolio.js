import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import HoverBlur from "./hoverBlur";
import { lora } from "../styles/fonts";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const projectLinks = [
    {
      id: "artPortfolio",
      github: null,
      live: "https://donnapriceart.com/",
      title: "Art Portfolio | HTML, CSS, JS",
      alt: "Art Portfolio",
      description: "A six-page static website.",
      src: "dp-portfolio-screenshot.jpg",
    },
    {
      id: "pomodoroTimer",
      github: "https://github.com/AthenasCode/Pomodoro",
      live: "https://athenascode.github.io/Pomodoro/",
      title: "Pomodoro Timer | React",
      alt: "Pomodoro Timer",
      description: "A minimal, customisable timer.",
      src: "pomo-screenshot.jpg",
    },

    {
      id: "cardDetails",
      github: "https://github.com/AthenasCode/Interactive-Card-Details-Form",
      live: "https://athenascode.github.io/Interactive-Card-Details-Form/",
      title: "Interactive Card Details Form | Tailwind, React",
      alt: "Interactive Card Details Form",
      description: "A form that displays card details as the user types.",
      src: "interactive-card-details-screenshot.jpg",
    },
    {
      id: "manuscriptApp",
      github: "https://github.com/ShayneJG/Manuscript-Manager",
      live: "https://manuscript-manager.vercel.app/",
      title: "Manuscript Manager | Next.js, AuthO",
      alt: "Manuscript Manager",
      description:
        "A collaborative project with a fellow programmer for an app that tracks monthly freelance earnings.",
      src: "manuscript-manager-screenshot.png",
    },
  ];

  return (
    <section className={styles.portfolioContainer}>
      <h2 id="portfolio" className={utilStyles.headingMd}>
        Portfolio
      </h2>
      <div className={styles.portfolioGrid}>
        {projectLinks.map((project) => (
          <div
            id={project.id}
            onMouseOver={() => setActiveProject(project.id)}
            onMouseOut={() => setActiveProject(null)}
            className={styles.projectContainer}
          >
            <div className={styles.projectImageParent}>
              <Image
                src={"/images/" + project.src}
                fill
                className={`${utilStyles.objectContain} ${styles.projectImage}`}
                alt={project.alt}
              />
            </div>
            <p className={`${styles.projectTitle}`}>{project.title}</p>
            <p
              className={`${utilStyles.italic} ${lora.className} ${styles.projectDescription}`}
            >
              {project.description}
            </p>
            <HoverBlur
              isActive={activeProject === project.id}
              github={project.github}
              live={project.live}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
