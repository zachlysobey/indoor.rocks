import type { Metadata } from "next";
import { getData } from "../../getData";
import { gymSlug } from "../../gymSlug";
import { regionId, regions } from "../../regions";
import { gymRoutes } from "../gymRoutes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "All Climbing Gyms · indoor.rocks",
};

// Every gym at once, by region, in as many columns as fit: like the map page's list with every region
// open, and no map. Each name links to the gym's own page.
export default function GymListPage() {
  const gyms = getData().climbingGyms;
  const groups = regions
    .map(region => ({ ...region, gyms: gyms.filter(gym => regionId(gym.address) === region.id) }))
    .filter(group => group.gyms.length > 0);

  return (
    <main className={styles.content}>
      <h2>All climbing gyms</h2>
      <div className={styles.columns}>
        {groups.map(group => (
          <section key={group.id} aria-labelledby={`region-${group.id}`}>
            <h3 id={`region-${group.id}`}>
              <span>{group.name}</span>
              <span className={styles.count}>{group.gyms.length}</span>
            </h3>
            <ul>
              {group.gyms.map(gym => {
                const slug = gymSlug(gym);
                return (
                  <li key={slug}>
                    {/* A plain <a>, not <Link>: Link would prefetch every gym page in view, which
                        here is all of them. */}
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
