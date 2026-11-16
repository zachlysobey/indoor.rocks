import type { Metadata } from "next";
import { formatAddress } from "../address";
import type { ClimbingGym } from "../dataModel";
import { getData } from "../getData";
import { PinMap, type Pin } from "./PinMap";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Map · indoor.rocks",
};

const toPin = (gym: ClimbingGym): Pin => ({
  lat: gym.address.latitude,
  lng: gym.address.longitude,
  title: gym.name,
  detail: formatAddress(gym.address),
  href: gym.website,
});

export default function MapPage() {
  return (
    <main className={styles.main}>
      <PinMap pins={getData().climbingGyms.map(toPin)} />
    </main>
  );
}
