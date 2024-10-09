import styles from "../styles/leaves.module.css";

export default function LeafBackground() {
  return (
    <>
      <div className={styles.leftLeaves}>
        <img src="/images/green_leaves.png" alt="Leaves." />
      </div>
      <div className={styles.rightLeaves}>
        <img src="/images/green_leaves.png" alt="Leaves." />
      </div>
    </>
  );
}
