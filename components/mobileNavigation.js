import styles from "../styles/layout.module.css";
import Link from "next/link";
import MenuIcon from "./icons/menuIcon";

export default function MobileNavigation({ toggleMenu, isOpen }) {
  return (
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
