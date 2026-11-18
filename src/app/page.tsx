import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/climbing-gyms">Climbing gyms</Link> — every gym, by state and on a map
        </li>
      </ul>
    </main>
  );
}
