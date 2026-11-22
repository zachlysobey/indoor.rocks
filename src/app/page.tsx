import Link from "next/link";
import { GymDetails } from "./climbing-gyms/GymDetails";
import { gymRoutes } from "./climbing-gyms/gymRoutes";
import ctaStyles from "./ctas.module.css";
import { featuredGym } from "./featuredGym";
import { getData } from "./getData";
import { gymSlug } from "./gymSlug";
import styles from "./page.module.css";

export default function Home() {
  const count = getData().climbingGyms.length;

  return (
    <main className={styles.main}>
      <p className={styles.intro}>
        Find somewhere to climb indoors, anywhere in the US: {count} climbing gyms on one map. Plus
        the rest of climbing inside — building a home wall, buying holds, and climbing worth watching.
      </p>

      <ul className={ctaStyles.ctas}>
        <li>
          <Link href={gymRoutes.index()}>
            <strong>Find a gym</strong>
            <span>Every gym on a map, by state, and by chain</span>
          </Link>
        </li>
        <li>
          <Link href="/home-walls">
            <strong>Build a home wall</strong>
            <span>Communities and resources for a wall of your own</span>
          </Link>
        </li>
        <li>
          <Link href="/climbing-holds">
            <strong>Get holds</strong>
            <span>Where to get them, new or used, or how to make your own</span>
          </Link>
        </li>
        <li>
          <Link href="/tv">
            <strong>Watch climbing</strong>
            <span>Competitions and YouTube channels worth your time</span>
          </Link>
        </li>
      </ul>

      <section className={styles.featured}>
        <h2>Featured gym</h2>
        <h3>
          <Link href={gymRoutes.page(gymSlug(featuredGym))}>{featuredGym.name}</Link>
        </h3>
        <GymDetails gym={featuredGym} />
      </section>
    </main>
  );
}
