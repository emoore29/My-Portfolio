import Head from "next/head";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import menuIcon from "../public/images/menu-icon.svg";
import sunIcon from "../public/images/day-mode.svg";
import moonIcon from "../public/images/night-mode.svg";
import { lora } from "../styles/fonts";
import MenuIcon from "./icons/menuIcon";
import GhIcon from "./icons/gitHubIcon";
import Navigation from "./navigation";
import MobileNavigation from "./mobileNavigation";
import Footer from "./footer";

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
          {/* <link rel="icon" href="/favicon.ico" /> Icon for future addition */}
          <meta name="description" content="Emma Moore's web dev portfolio." />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <header className={styles.header}>
          <h1
            className={`${utilStyles.headingXl} ${lora.className} ${styles.name}`}
          >
            {name}
          </h1>
          <p
            className={`${lora.className} ${utilStyles.italic} ${styles.title} ${styles.subtitle}`}
          >
            web developer
          </p>
          <Navigation />
          <MobileNavigation isOpen={isOpen} toggleMenu={toggleMenu} />
        </header>
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
