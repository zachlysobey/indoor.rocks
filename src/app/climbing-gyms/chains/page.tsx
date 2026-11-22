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
  const gyms = getData().climbingGyms;
  const chains = gymChains(gyms);
  const chainGyms = chains.reduce((count, chain) => count + chain.gyms.length, 0);
  const groups = chains.map(({ company, gyms }, i) => ({
    id: `chain-${i}`,
    name: company.name,
    website: company.website,
    gyms,
  }));

  return (
    <GymMorph.Page>
      <main className={styles.content}>
        <h2>Climbing gym chains</h2>
        <p className={styles.lede}>
          {`Of the ${gyms.length} climbing gyms listed, ${chainGyms} are part of one of ${chains.length} chains.`}
        </p>
        <ChainList groups={groups} />
      </main>
    </GymMorph.Page>
  );
}
