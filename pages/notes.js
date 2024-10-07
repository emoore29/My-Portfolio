import Link from "next/link";
import Date from "../components/Date";
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/notes.module.css";
import utilStyles from "../styles/utils.module.css";

// Exporting getStaticProps causes Next.js to pre-render the page at build time using the props returned by getStaticProps
export async function getStaticProps() {
  // Gets all notes sorted for display in Notes component
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData, // will be passed to the notes page component as props
    },
  };
}

// Displays all the notes
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
      <div className={styles.flexCol}>
        <figure className={styles.illustration}>
          <img
            src="/images/transhumans-tech.png"
            alt="Artwork of a boy and a girl sharing ideas."
          />
          <figcaption className={styles.caption}>
            <a href="https://www.transhumans.xyz/about">Transhumans</a>
          </figcaption>
        </figure>
      </div>
    </Layout>
  );
}
