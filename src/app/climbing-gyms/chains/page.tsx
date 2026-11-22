import type { Metadata } from "next";
import { getData } from "../../getData";
import { gymChains } from "../../gymChains";
import { gymSlug } from "../../gymSlug";
import { gymRoutes } from "../gymRoutes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Climbing Gym Chains · indoor.rocks",
};

// Every chain, biggest first, laid out like the list page: the chain's name links out to its own
// website (where there's one on record), and each gym to its page here.
export default function GymChainsPage() {
  const chains = gymChains(getData().climbingGyms);

  return (
    <main className={styles.content}>
      <h2>Climbing gym chains</h2>
      <div className={styles.columns}>
        {chains.map(({ company, gyms }, i) => (
          <section key={company.name} aria-labelledby={`chain-${i}`}>
            <h3 id={`chain-${i}`}>
              {company.website
                ? <a href={company.website}>{`${company.name} ↗`}</a>
                : <span>{company.name}</span>}
              <span className={styles.count}>{gyms.length}</span>
            </h3>
            <ul>
              {gyms.map(gym => {
                const slug = gymSlug(gym);
                return (
                  <li key={slug}>
                    {/* A plain <a>, not <Link>, as on the list page: Link would prefetch them all. */}
                    <a href={gymRoutes.page(slug)}>{gym.name}</a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
