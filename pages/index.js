import Image from "next/image";
import Link from "next/link";
import LinkIcon from "../components/icons/LinkIcon";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const projectLinks = [
    {
      id: "acpd",
      github: "https://github.com/emoore29/acpd",
      live: "https://acpd.vercel.app/",
      title: "Accessible Colour Palette Designer",
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

    // {
    //   id: "norspac",
    //   github: null,
    //   live: "https://norspac.com/",
    //   title: "Norspac",
    //   tech: "Gatsby, Shopify, Netlify",
    //   alt: "Screenshot of art portfolio website.",
    //   description: "Artist portfolio and store.",
    //   src: "norspac.png",
    // },
  ];

  const docsLinks = [
    {
      id: "columncounttester",
      github: "https://github.com/emoore29/Column-Count-Tester",
      live: "https://emoore29.github.io/Column-Count-Tester/",
      title: "Column-count tester",
      tech: null,
      alt: "Screenshot of column-count tester page.",
      description:
        "A writeup documenting issues found with the CSS column-count property on various browsers and devices.",
      src: "column-count-screenshot.png",
    },
    // {
    //   id: "redcrossreport",
    //   github: null,
    //   live: null,
    //   title: "After Action Review: Red Cross (sample)",
    //   tech: null,
    //   alt: "Screenshot of report.",
    //   description:
    //     "An after action review written to support team development after a community incident.",
    //   src: "aar-screenshot.png",
    // },
    // {
    //   id: "adguardhome",
    //   github: null,
    //   live: null,
    //   title: "AdGuard Home | Raspberry Pi",
    //   tech: null,
    //   alt: "Screenshot of documentation.",
    //   description:
    //     "Instructions for setting up AdGuard Home on a Raspberry Pi.",
    //   src: "rasbpi-screenshot.png",
    // },
  ];

  return (
    <Layout>
      <h3>Web development</h3>
      <section className={styles.portfolioContainer}>
        <ul className={styles.portfolioItems}>
          {projectLinks.map((project) => (
            <li
              id={project.id}
              className={styles.projectContainer}
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
              <section className={styles.projectInfo}>
                <p className={styles.projectName}>{project.title}</p>
                <p className={styles.projectTech}>{project.tech}</p>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.projectLinks}>
                  <ul>
                    {project.github && (
                      <li>
                        <Link href={project.github} target="_blank">
                          View on Github{" "}
                          <div className={styles.linkIcon}>
                            <LinkIcon />
                          </div>
                        </Link>
                      </li>
                    )}
                    {project.live && (
                      <li>
                        <Link href={project.live} target="_blank">
                          View live{" "}
                          <div className={styles.linkIcon}>
                            <LinkIcon />
                          </div>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.portfolioContainer}>
        <h3>Other</h3>
        <ul className={styles.portfolioItems}>
          {docsLinks.map((project) => (
            <li
              id={project.id}
              className={styles.projectContainer}
              key={`${project.name} + ${project.id}`}
            >
              <div className={styles.docsImageWrapper}>
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  alt={project.alt}
                  src={`/images/${project.src}`}
                />
              </div>
              <section className={styles.projectInfo}>
                <p className={styles.projectName}>{project.title}</p>
                <p className={styles.projectTech}>
                  {project.tech && project.tech}
                </p>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.projectLinks}>
                  <ul>
                    {project.github && (
                      <li>
                        <Link href={project.github} target="_blank">
                          View on Github{" "}
                          <div className={styles.linkIcon}>
                            <LinkIcon />
                          </div>
                        </Link>
                      </li>
                    )}
                    {project.live && (
                      <li>
                        <Link href={project.live} target="_blank">
                          View live{" "}
                          <div className={styles.linkIcon}>
                            <LinkIcon />
                          </div>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
