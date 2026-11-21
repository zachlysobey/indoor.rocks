import type { Metadata } from "next";
import { getData } from "../getData";
import { GymExplorer } from "./GymExplorer";
import { GymMorph } from "./GymMorph";
import { gymRoutes } from "./gymRoutes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Climbing Gyms · indoor.rocks",
  // Whatever's in ?focus=, it's the same page.
  alternates: { canonical: gymRoutes.list() },
};

export default function ClimbingGymsPage() {
  return (
    <GymMorph.Page>
      <main className={styles.content}>
        <GymExplorer gyms={getData().climbingGyms} />
      </main>
    </GymMorph.Page>
  );
}
