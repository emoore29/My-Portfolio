import styles from "../styles/layout.module.css";
import Link from "next/link";

export default function Navigation({ home }) {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">Work</Link>
        </li>
        <li>
          <Link href="/notes">Notes</Link>
        </li>
        <li>
          <Link href="/">
            <div className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-15 -15 30 30">
                <path
                  d="M 9 -7 A 1 1 0 0 0 8 -4 A 1 1 0 0 0 9 -10 C 5 -11 1 -5 0 0 M -9 7 A 1 1 0 0 0 -8 4 A 1 1 0 0 0 -9 10 C -5 11 -1 5 0 0 M 0 0 L -5 -5 L -5 -11 M -5 -5 L -11 -5 A 1 1 0 0 0 -14 -5 A 1 1 0 0 0 -11 -5 M 0 0 L 5 5 L 5 11 A 1 1 0 0 0 5 14 A 1 1 0 0 0 5 11 M 5 5 L 11 5 A 1 1 0 0 0 14 5 A 1 1 0 0 0 11 5"
                  stroke="#000000"
                  stroke-width="1"
                  fill="none"
                />
                <path
                  d="M -5 -11 A 1 1 0 0 0 -5 -14 A 1 1 0 0 0 -5 -11"
                  stroke="#B06176"
                  stroke-width="1"
                  fill="none"
                />
              </svg>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
