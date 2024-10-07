import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/layout.module.css";

export default function Navigation() {
  const router = useRouter();

  const pathName = router.pathname;

  return (
    <nav className={styles.navBar}>
      <Link href="/">
        <span className={styles.heading}>Emma Moore</span>
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link
            href="/about"
            className={pathName == "/about" ? `${styles.activeLink}` : ""}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={pathName == "/" ? `${styles.activeLink}` : ""}
          >
            my work
          </Link>
        </li>
        <li>
          <Link
            href="/notes"
            className={
              pathName.startsWith("/notes") ? `${styles.activeLink}` : ""
            }
          >
            notes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
