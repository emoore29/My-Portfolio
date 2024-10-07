import Link from "next/link";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from "../../styles/notes.module.css";
import utilStyles from "../../styles/utils.module.css";

// Gets post data for the current url slug (a post id)
// params contains the id (because this file name is [id], a dynamic route)
export async function getStaticProps({ params }) {
  // Retrieve and return post data
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// Returns an array of possible values for id
// Note: I am not sure I understand why this function is needed here, but it is
// See https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths
// It seems to be required by the framework when a page is using dynamic routes and getStaticProps
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// Post component handles display of postData once it has been retrieved from getStaticProps
export default function Post({ postData }) {
  return (
    <Layout>
      <article>
        <h1 className={styles.noteTitle}>{postData.title}</h1>
        <div
          className={`${utilStyles.secondaryText}  ${styles.blogTitleAndDate}`}
        >
          <Date dateString={postData.date} />
        </div>
        <div
          className={`${styles.notes}`}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
      <div className={`${styles.backToHome} ${styles.backBtn}`}>
        <Link href="/notes">← Back to notes</Link>
      </div>
    </Layout>
  );
}
