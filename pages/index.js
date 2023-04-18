import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Blog from "./blog";

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
      <section className={utilStyles.headingMd}>
        <h2 id="about" className={utilStyles.headingLg}>
          About
        </h2>
        <p>
          I am a junior web developer with experience primarily in frontend
          React, and an interest in UI/UX, backend integration, and learning
          other technologies.
        </p>
      </section>
      <section>
        <h2 id="skills" className={utilStyles.headingLg}>
          Skills
        </h2>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Portfolio</h2>
      </section>
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
        <h2 className={utilStyles.headingLg}>Contact</h2>
      </section>
    </Layout>
  );
}
