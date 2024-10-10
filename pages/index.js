import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/portfolio.module.css";

export default function Home() {
  return (
    <Layout>
      <h4>Web dev</h4>
      <ul className={styles.projectsList}>
        <li>
          <span>Donna Price Art</span>
          {" / "}
          <a href="https://donnapriceart.com/" target="_blank">
            Live{" "}
          </a>
          <ul>
            <li>An Australian artist's portfolio.</li>
            <li>Built with Next.js and Sanity, deployed with Vercel</li>
            <li>
              <Link
                href="/notes/building-an-art-portfolio-website"
                target="_blank"
              >
                Here{" "}
              </Link>
              is a more detailed writeup about this project.
            </li>
          </ul>
        </li>
        <li>
          <span>Contrast Calculator</span>
          {" / "}
          <a href="https://acpd.vercel.app/" target="_blank">
            Live
          </a>
          {" / "}
          <a href="https://github.com/emoore29/acpd" target="_blank">
            GitHub
          </a>
          <ul>
            <li>
              A tool to assist developers in creating colour palettes with
              accessible contrasts.
            </li>
            <li>Built with Next.js and TypeScript, deployed with Vercel</li>
          </ul>
        </li>
        <li>
          <span>React Context Playground</span>
          {" / "}
          <a
            href="https://emoore29.github.io/react-context-playground/"
            target="_blank"
          >
            Live
          </a>
          {" / "}
          <a
            href="https://github.com/emoore29/react-context-playground"
            target="_blank"
          >
            GitHub
          </a>
          <ul>
            <li>A simple demonstration of React Context.</li>
          </ul>
        </li>
        <li>
          <span>Pomodoro</span>
          {" / "}
          <a href="https://emoore29.github.io/pomodoro/" target="_blank">
            Live
          </a>
          {" / "}
          <a href="https://github.com/emoore29/pomodoro" target="_blank">
            GitHub
          </a>
          <ul>
            <li>An older project built with React.</li>
          </ul>
        </li>
      </ul>
      <h4>Other</h4>
      <ul className={styles.projectsList}>
        <li>
          <span>Coding Puzzles</span>
          {" / "}
          <a href="https://github.com/emoore29/coding-puzzles" target="_blank">
            GitHub
          </a>
          <ul>
            <li>
              My solutions to various coding problems, including LeetCode and
              more.
            </li>
          </ul>
        </li>
      </ul>

      {/* <ul className={styles.portfolioContainer}>
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
      </ul> */}
    </Layout>
  );
}
