import type { Metadata } from "next";
import { Suspense } from "react";
import { formatAddress } from "../address";
import type { ClimbingGym } from "../dataModel";
import { getData } from "../getData";
import { ClimbingGyms } from "./ClimbingGyms";
import { GymViews } from "./GymViews";
import { PinMap, type Pin } from "./PinMap";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Climbing Gyms · indoor.rocks",
};

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

const toPin = (gym: ClimbingGym): Pin => ({
  lat: gym.address.latitude,
  lng: gym.address.longitude,
  title: gym.name,
  detail: formatAddress(gym.address),
  href: gym.website,
});

export default function ClimbingGymsPage() {
  const dataPromise = delay(1000).then(getData);
  const nyGymPromise = dataPromise.then(d => d.climbingGyms.filter(g => g.address.state === "NY"))
  const njGymPromise = dataPromise.then(d => d.climbingGyms.filter(g => g.address.state === "NJ"))
  const ctGymPromise = dataPromise.then(d => d.climbingGyms.filter(g => g.address.state === "CT"))

  const cards = (
    <>
      <h2>Climbing Gyms in New York (NY)</h2>
      <Suspense fallback={(<p>Loading...</p>)}>
        <ClimbingGyms dataPromise={nyGymPromise} />
      </Suspense>

      <h2>Climbing Gyms in New Jersey (NJ)</h2>
      <Suspense fallback={(<p>Loading...</p>)}>
        <ClimbingGyms dataPromise={njGymPromise} />
      </Suspense>

      <h2>Climbing Gyms in Connecticut (CT)</h2>
      <Suspense fallback={(<p>Loading...</p>)}>
        <ClimbingGyms dataPromise={ctGymPromise} />
      </Suspense>
    </>
  );

  return (
    <main className={styles.content}>
      <GymViews
        cards={cards}
        map={<PinMap pins={getData().climbingGyms.map(toPin)} />}
      />
    </main>
  );
}
