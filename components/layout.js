import Head from "next/head";
import styles from "../styles/layout.module.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

export const siteTitle = "Emma Moore";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Emma Moore's portfolio." />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <title>{siteTitle}</title>
        </Head>
        <header className={styles.header}>
          <Navigation />
        </header>
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
