import type { Metadata } from "next";
import { getData } from "../../getData";
import { gymChains } from "../../gymChains";
import { GymMorph } from "../GymMorph";
import { gymRoutes } from "../gymRoutes";
import { ChainList } from "./ChainList";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Climbing Gym Chains · indoor.rocks",
  // Whatever's in ?focus=, it's the same page.
  alternates: { canonical: gymRoutes.chains() },
};

// Every chain, biggest first, collapsed to its name, with a link out to its own website (where
// there's one on record). Opening a chain lists its gyms, and picking one opens its card.
export default function GymChainsPage() {
  const groups = gymChains(getData().climbingGyms).map(({ company, gyms }, i) => ({
    id: `chain-${i}`,
    name: company.name,
    website: company.website,
    gyms,
  }));

  return (
    <GymMorph.Page>
      <main className={styles.content}>
        <h2>Climbing gym chains</h2>
        <ChainList groups={groups} />
      </main>
    </GymMorph.Page>
  );
}
