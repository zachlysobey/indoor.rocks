import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/climbing-gyms">Climbing gyms</Link> — every gym, by state and on a map
        </li>
        <li>
          <Link href="/home-walls">Home walls</Link> — communities and resources for building your own
        </li>
        <li>
          <Link href="/indoor-climbing-tv">Indoor climbing TV</Link> — climbing worth watching
        </li>
      </ul>
    </main>
  );
}
