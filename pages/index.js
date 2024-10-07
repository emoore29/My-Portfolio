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
      <h4>Web dev</h4>
      <ul className={styles.projectsList}>
        <li className={styles.projectLi}>
          <span>Donna Price Art:</span> An Australian artist's portfolio.
          <ul>
            <li>Built with Next.js and Sanity, deployed with Vercel</li>
            <li>
              <Link href="https://donnapriceart.com/" target="_blank">
                View live
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <span>Contrast Calculator:</span> A tool to assist developers in
          creating colour palettes with accessible contrasts.
          <ul>
            <li>Built with Next.js and TypeScript, deployed with Vercel</li>
            <li>
              <Link href="https://acpd.vercel.app/" target="_blank">
                View live
              </Link>
            </li>
            <li>
              <Link href="https://github.com/emoore29/acpd" target="_blank">
                View GitHub repository
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <h4>Other</h4>
      <ul className={styles.projectsList}>
        <li className={styles.projectLi}>
          <span>Norspac:</span> An e-commerce artist portfolio built with
          another developer.
          <ul>
            <li>Built with Gatsby, React Context, and Shopify.</li>
            <li>
              <Link href="https://norspac.com/" target="_blank">
                View live
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.projectLi}>
          <span>Coding Puzzles:</span> My solutions to various coding problems.
          <ul>
            <li>
              <Link
                href="https://github.com/emoore29/coding-puzzles"
                target="_blank"
              >
                View on GitHub
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.projectLi}>
          <span>React Context Playground:</span> Built to understand and demo
          React Context.
          <ul>
            <li>
              <Link
                href="https://emoore29.github.io/react-context-playground/"
                target="_blank"
              >
                View live
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/emoore29/react-context-playground"
                target="_blank"
              >
                View on GitHub
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.projectLi}>
          <span>Pomodoro:</span> An older project built with React.
          <ul>
            <li>
              <Link href="https://emoore29.github.io/pomodoro/" target="_blank">
                View live
              </Link>
            </li>
            <li>
              <Link href="https://github.com/emoore29/pomodoro" target="_blank">
                View on GitHub
              </Link>
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
