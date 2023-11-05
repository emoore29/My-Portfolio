import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import ListItem from "../components/icons/listIcon";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const projectLinks = [
    {
      id: "manuscriptApp",
      github: "https://github.com/ShayneJG/Manuscript-Manager",
      live: "https://manuscript-manager.vercel.app/",
      title: "Manuscript Manager",
      tech: "Next.js, Auth0",
      alt: "Manuscript Manager",
      description: "An app that tracks monthly freelance earnings.",
      src: "manuscript-manager-screenshot.png",
    },
    {
      id: "artPortfolio",
      github: null,
      live: "https://donnapriceart.com/",
      title: "Art Portfolio",
      tech: "HTML, CSS, JS",
      alt: "Art Portfolio",
      description: "A six-page static website.",
      src: "dp-portfolio-screenshot.jpg",
    },
  ];

  return (
    <Layout>
      <section className={styles.portfolioContainer}>
        <h2 id="portfolio" className={utilStyles.headingMd}>
          Portfolio
        </h2>
        <ul className={styles.portfolioItems}>
          {projectLinks.map((project) => (
            <>
              <li
                id={project.id}
                onMouseOver={() => setActiveProject(project.id)}
                onMouseOut={() => setActiveProject(null)}
                className={styles.projectContainer}
              >
                <div className={styles.portfolioImageWrapper}>
                  <Image
                    fill
                    alt={project.alt}
                    src={`/images/${project.src}`}
                  />
                </div>
                {/* <p>View details... dropdown coming soonTM</p> */}
                <section className={styles.projectInfo}>
                  <p className={styles.projectName}>{project.title}</p>
                  <p className={styles.projectTech}>{project.tech}</p>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <nav className={styles.projectLinks}>
                    <ul>
                      {project.github && (
                        <li>
                          <Link href={project.github}>View on Github</Link>
                        </li>
                      )}
                      {project.live && (
                        <li>
                          <Link href={project.live}>View live</Link>
                        </li>
                      )}
                    </ul>
                  </nav>
                </section>
              </li>
            </>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
