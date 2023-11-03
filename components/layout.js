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

const name = "Emma Moore";
export const siteTitle = "Emma Moore - Web Developer";

export default function Layout({ children, home }) {
  // children are shown in <main> so whenever components/pages are nested inside <Layout></Layout> they are displayed there (between the header and footer)
  const [isOpen, setIsOpen] = useState(false);
  // const [dayMode, setDayMode] = useState(true); // dark/light mode for future implementation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const toggleDayMode = () => {
  //   setDayMode(!dayMode);
  // }; // dark/light mode for future implementation

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
            className={`${lora.className} ${utilStyles.italic} ${styles.title}`}
          >
            web developer
          </p>

          <nav className={styles.navBar}>
            <ul className={styles.navList}>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <Link href="/notes">Notes</Link>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          {/* Mobile nav button displays <768px */}
          <div className={styles.mobileNav}>
            <button>
              <MenuIcon toggleMenu={toggleMenu} />
              {/* <Image
                  onClick={toggleMenu}
                  priority
                  src={menuIcon}
                  alt="Menu button"
                  width="35"
                  height="35"
                /> */}
            </button>
            {isOpen && (
              <nav className={styles.mobileNavList}>
                <ul>
                  <li>
                    <a onClick={toggleMenu} href="/#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a onClick={toggleMenu} href="/#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <Link onClick={toggleMenu} href="/blog">
                      Notes
                    </Link>
                  </li>
                  <li>
                    <a onClick={toggleMenu} href="/#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
          {/* <button className={styles.nightModeToggler}>
              {dayMode ? (
                <Image
                  onClick={toggleDayMode}
                  priority
                  src={sunIcon}
                  alt="Day/night mode toggle"
                  width="35"
                  height="35"
                />
              ) : (
                <Image
                  onClick={toggleDayMode}
                  priority
                  src={moonIcon}
                  alt="Day/night mode toggle"
                  width="35"
                  height="35"
                />
              )}
            </button> */}
        </header>
        <main className={styles.content}>{children}</main>
        <footer className={styles.socialsFooter}>
          <div id="github">
            <a target="_blank" href="https://github.com/AthenasCode">
              <GhIcon />
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/emma-moore-063608b0/"
            target="_blank"
          >
            <div id="linkedin">
              <Image
                className={styles.socialsImg}
                src="/images/LI-In-Bug.png"
                height={27}
                width={30}
                alt="Linkedin icon"
              />
            </div>
          </a>
        </footer>
      </div>
    </>
  );
}
