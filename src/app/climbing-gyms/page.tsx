import type { Metadata } from "next";
import { getData } from "../getData";
import { GymExplorer } from "./GymExplorer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Climbing Gyms · indoor.rocks",
};

export default function ClimbingGymsPage() {
  return (
    <main className={styles.content}>
      <GymExplorer gyms={getData().climbingGyms} />
    </main>
  );
}
