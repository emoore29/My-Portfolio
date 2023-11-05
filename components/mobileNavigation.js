import styles from "../styles/layout.module.css";
import Link from "next/link";
import MenuIcon from "./icons/menuIcon";

export default function MobileNavigation({ toggleMenu, isOpen, home }) {
  return (
    <div className={home ? styles.mobileNavHome : styles.mobileNav}>
      <button>
        <MenuIcon toggleMenu={toggleMenu} />
      </button>
      {isOpen && (
        <nav
          className={
            home
              ? styles.mobileNavListContainerHome
              : styles.mobileNavListContainer
          }
        >
          <ul className={styles.mobileNavListFlex}>
            <li>
              <Link onClick={toggleMenu} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/notes">
                Notes
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
