import styles from "../styles/Home.module.css";

// Contains elements that display when mouse enters a portfolio project container
// Display is default none until mouse enters a project
export default function HoverBlur({ blurProject }) {
  return (
    <>
      <div
        style={{ display: blurProject ? "block" : "none" }}
        className={styles.projectHoverBlur}
      ></div>
      <div
        style={{ display: blurProject ? "flex" : "none" }}
        className={styles.projectHoverButtonsContainer}
      >
        <button>View on Github</button>
        <button>View live</button>
      </div>
    </>
  );
}
