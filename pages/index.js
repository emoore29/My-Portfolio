import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Date from "../components/date";
import Blog from "./blog";
import Portfolio from "../components/portfolio";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${styles.aboutContainer}`}>
        <h2
          id="about"
          className={`${utilStyles.headingLg} ${styles.aboutHeading}`}
        >
          About
        </h2>
        <p className={styles.aboutContent}>
          I am a junior web developer with experience primarily in frontend
          React, and an interest in UI/UX, backend integration, and learning
          other technologies.
        </p>
        <Image
          src="/images/profile.jpg" // Route of the image file
          height={130} // Desired size with correct aspect ratio
          width={130} // Desired size with correct aspect ratio
          alt="Your Name"
          className={`${utilStyles.borderCircle} ${styles.aboutProfileImg}`}
        />
      </section>
      <section>
        <h2 id="skills" className={utilStyles.headingLg}>
          Skills
        </h2>
        <ul className={styles.skillList}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Tailwind</li>
          <li>Next.js</li>
          <li>Git/Github</li>
          <li>MongoDB</li>
          <li>Figma</li>
        </ul>
      </section>
      <Portfolio />
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <p onClick={() => console.log(allPostsData)}>test</p>
      <Blog /> */}
      <section>
        <h2 id="contact" className={utilStyles.headingLg}>
          Contact
        </h2>
      </section>
    </Layout>
  );
}
