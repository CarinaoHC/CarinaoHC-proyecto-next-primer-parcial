import styles from "./page.module.css";
import Next from "./components/next";

export default function Home() {
  return (
    <div className={styles.main}>
      <Next />
    </div>
  );
}
