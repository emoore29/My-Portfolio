import Image from "next/image";
import Link from "next/link";
import LinkArrowIcon from "../components/icons/LinkArrowIcon";
import Layout from "../components/layout";
import styles from "../styles/portfolio.module.css";

export default function Home() {
  const projectLinks = [
    {
      id: "acpd",
      github: "https://github.com/emoore29/acpd",
      live: "https://acpd.vercel.app/",
      title: "Contrast Calculator",
      tech: "Next.js, TypeScript",
      alt: "Screenshot of acpd.",
      description:
        "A tool to assist developers and designers in creating colour palettes with accessible contrasts.",
      src: "acpd.png",
    },
    {
      id: "donnapriceart",
      github: null,
      live: "https://donnapriceart.com/",
      title: "Donna Price Art",
      tech: "Next.js, Sanity, Vercel",
      alt: "Screenshot of art portfolio website.",
      description:
        "An Australian artist's portfolio that includes client customisation with Sanity Studio.",
      src: "dpa.png",
    },
    {
      id: "pomodoro",
      github: "https://github.com/emoore29/Pomodoro",
      live: "https://emoore29.github.io/Pomodoro/",
      title: "Minimalist Pomodoro",
      tech: "React",
      alt: "Screenshot of pomodoro website.",
      description:
        "An older project I built after learning React. A simple pomodoro timer with color and timer customisation.",
      src: "pomodoro.jpg",
    },
  ];

  return (
    <Layout>
      <ul className={styles.portfolioContainer}>
        {projectLinks.map((project) => (
          <li
            id={project.id}
            className={styles.project}
            key={`${project.name} + ${project.id}`}
          >
            <div className={styles.portfolioImageWrapper}>
              <Image
                fill
                style={{ objectFit: "contain" }}
                alt={project.alt}
                src={`/images/${project.src}`}
              />
            </div>
            <div className={styles.projectInfo}>
              <p className={styles.projectName}>{project.title}</p>
              <p className={styles.projectTech}>{project.tech}</p>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                <ul>
                  {project.github && (
                    <li>
                      <Link href={project.github} target="_blank">
                        View on Github{" "}
                        <div className={styles.linkIcon}>
                          <LinkArrowIcon />
                        </div>
                      </Link>
                    </li>
                  )}
                  {project.live && (
                    <li>
                      <Link href={project.live} target="_blank">
                        View live{" "}
                        <div className={styles.linkIcon}>
                          <LinkArrowIcon />
                        </div>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
