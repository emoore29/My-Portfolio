import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const projectLinks = [
    {
      id: "donnapriceart",
      github: null,
      live: "https://donnapriceart.com/",
      title: "Donna Price Art",
      tech: "Next.js, Sanity, Vercel",
      alt: "Screenshot of art portfolio website.",
      description:
        "An artist portfolio built with Next.js that uses Sanity as a headless CMS for website content management.",
      src: "dpa.png",
    },
    {
      id: "acpd",
      github: "https://github.com/emoore29/acpd",
      live: "https://norspac.com/",
      title: "Accessible Colour Palette Designer",
      tech: "Next.js, TypeScript",
      alt: "Screenshot of acpd.",
      description:
        "A tool for developers and designers to help create colour palettes with accessible contrasts.",
      src: "acpd.png",
    },
    {
      id: "norspac",
      github: null,
      live: "https://norspac.com/",
      title: "Norspac",
      tech: "Gatsby, Shopify, Netlify",
      alt: "Screenshot of art portfolio website.",
      description:
        "An artist portfolio built with Gatsby that uses Shopify as a headless CMS for product management.",
      src: "norspac.png",
    },
  ];

  return (
    <Layout>
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
                        <Link href={project.github}>View on Github</Link>
                      </li>
                    )}
                    {project.live && (
                      <li>
                        <Link href={project.live}>View live</Link>
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
