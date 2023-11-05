import styles from "../styles/layout.module.css";
import Link from "next/link";

export default function Navigation({ home }) {
  return (
    <nav className={home ? styles.navHome : styles.navBar}>
      <ul className={home ? styles.navListHome : styles.navList}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/notes">Notes</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
