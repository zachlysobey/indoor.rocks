import type { Metadata } from "next";
import Link from "next/link";
import { getData } from "../getData";
import { gymRoutes } from "./gymRoutes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Climbing Gyms · indoor.rocks",
};

// The gyms' landing page: a way into each view of them.
export default function ClimbingGymsPage() {
  const count = getData().climbingGyms.length;

  return (
    <main className={styles.content}>
      <h2>Climbing gyms</h2>
      <p className={styles.lede}>{count} indoor climbing gyms, and counting.</p>
      <ul className={styles.ctas}>
        <li>
          <Link href={gymRoutes.map()}>
            <strong>Map</strong>
            <span>Every gym on a map, with a list by state alongside</span>
          </Link>
        </li>
      </ul>
    </main>
  );
}
