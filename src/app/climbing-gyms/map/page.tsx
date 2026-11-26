import type { Metadata } from "next";
import { getData } from "../../getData";
import { GymExplorer } from "../GymExplorer";
import { GymMorph } from "../GymMorph";
import { gymRoutes } from "../gymRoutes";
import { ViewToggle } from "../ViewToggle";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Climbing Gym Map · indoor.rocks",
  // Whatever's in ?focus=, it's the same page.
  alternates: { canonical: gymRoutes.map() },
};

export default function ClimbingGymMapPage() {
  return (
    <GymMorph.Page>
      <main className={styles.content}>
        <ViewToggle current="map" />
        <GymExplorer gyms={getData().climbingGyms} />
      </main>
    </GymMorph.Page>
  );
}
