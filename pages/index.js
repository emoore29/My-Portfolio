import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import About from "./about";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}
