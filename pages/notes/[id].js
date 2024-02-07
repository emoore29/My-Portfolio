import Layout from "../../components/layout";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/Home.module.css";
import { lora } from "../../styles/fonts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

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
          className={`${styles.notes} ${lora.className}`}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
      <div className={`${styles.backToHome} ${styles.backBtn}`}>
        <Link href="/notes">← Back to notes</Link>
      </div>
    </Layout>
  );
}
