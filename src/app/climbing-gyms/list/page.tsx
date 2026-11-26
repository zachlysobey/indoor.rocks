import type { Metadata } from "next";
import { getData } from "../../getData";
import { gymSlug } from "../../gymSlug";
import { gymsByCountry } from "../../regions";
import { gymRoutes } from "../gymRoutes";
import { ViewToggle } from "../ViewToggle";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "All Climbing Gyms · indoor.rocks",
};

// Every gym at once, by country then region, each country's regions in as many columns as fit: like
// the map page's list with every region open, and no map. Each name links to the gym's own page.
export default function GymListPage() {
  const countries = gymsByCountry(getData().climbingGyms);

  return (
    <main className={styles.content}>
      <ViewToggle current="list" />
      <h2>All climbing gyms</h2>
      {countries.map(country => (
        <section key={country.id} aria-labelledby={`country-${country.id}`}>
          <h3 id={`country-${country.id}`} className={styles.country}>
            <span>{country.name}</span>
            <span className={styles.count}>{country.gymCount}</span>
          </h3>
          <div className={styles.columns}>
            {country.regions.map(group => (
              <section key={group.id} aria-labelledby={`region-${group.id}`}>
                <h4 id={`region-${group.id}`}>
                  <span>{group.name}</span>
                  <span className={styles.count}>{group.gyms.length}</span>
                </h4>
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
        </section>
      ))}
    </main>
  );
}
