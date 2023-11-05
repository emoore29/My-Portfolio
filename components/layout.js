import Head from "next/head";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { useState } from "react";
import { lora } from "../styles/fonts";
import Navigation from "./navigation";
import MobileNavigation from "./mobileNavigation";
import Footer from "./footer";
import Link from "next/link";

const name = "Emma Moore";
export const siteTitle = "Emma Moore - Web Developer";

export default function Layout({ children, home }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Emma Moore's web dev portfolio." />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        {!home ? (
          <header className={styles.header}>
            <h1
              className={`${utilStyles.headingXl} ${lora.className} ${styles.name}`}
            >
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {name}
              </Link>
            </h1>
            <p
              className={`${lora.className} ${utilStyles.italic} ${styles.title} ${styles.subtitle}`}
            >
              web developer
            </p>
            <Navigation />
            <MobileNavigation isOpen={isOpen} toggleMenu={toggleMenu} />
          </header>
        ) : (
          <header className={`${styles.homeHeader}`}>
            <section className={styles.homeTitle}>
              <h1 className={`${utilStyles.heading2Xl} ${lora.className}`}>
                {name}
              </h1>
              <p
                className={`${lora.className} ${utilStyles.italic} ${styles.subtitle}`}
              >
                web developer
              </p>
            </section>
            <Navigation home />
            <MobileNavigation isOpen={isOpen} toggleMenu={toggleMenu} home />
          </header>
        )}
        <main className={home ? styles.homeContent : styles.content}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
