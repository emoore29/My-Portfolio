import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/Home.module.css";
import Head from "next/head";

// Exporting getStaticProps causes Next.js to pre-render the page at build time using the props returned by getStaticProps
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData, // will be passed to the notes page component as props
    },
  };
}

export default function Notes({ allPostsData }) {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li
              className={`${utilStyles.listItem} ${utilStyles.primaryText}`}
              key={id}
            >
              <Link href={`/notes/${id}`}>{title}</Link>
              <br />
              <small
                className={`${utilStyles.secondaryText} ${utilStyles.italic}`}
              >
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <figure className={styles.notesImg}>
        <img
          src="/images/transhumans.png"
          alt="A boy and a girl sharing ideas."
        />
        <figcaption className={styles.caption}>
          <a href="https://www.transhumans.xyz/about">By Pablo Stanley</a>
        </figcaption>
      </figure>
    </Layout>
  );
}
