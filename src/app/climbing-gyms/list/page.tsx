import type { Metadata } from "next";
import { getData } from "../../getData";
import { ViewToggle } from "../ViewToggle";
import { GymList } from "./GymList";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "All Climbing Gyms · indoor.rocks",
};

// Every gym at once, like the map page's list with every region open, and no map. Each name links to
// the gym's own page.
export default function GymListPage() {
  return (
    <main className={styles.content}>
      <ViewToggle current="list" />
      <h2>All climbing gyms</h2>
      <GymList gyms={getData().climbingGyms} />
    </main>
  );
}
