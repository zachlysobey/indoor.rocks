import type { Metadata } from "next";
import Link from "next/link";
import styles from "../linkPage.module.css";

export const metadata: Metadata = {
  title: "Home Walls · indoor.rocks",
};

export default function HomeWallsPage() {
  return (
    <main className={styles.main}>
      <h2>Home walls</h2>
      <p>Resources for building and climbing on a wall of your own.</p>
      <p>
        Need holds? See <Link href="/climbing-holds">where to get them</Link>.
      </p>

      <section>
        <h3>Communities</h3>

        <h4>Facebook groups</h4>
        <ul>
          <li>
            <a href="https://www.facebook.com/groups/homeclimbingwallforum">Home Climbing Wall Forum</a>{" "}
            — the big general-purpose group
          </li>
          <li>
            <a href="https://www.facebook.com/groups/637957999711041/">Home Climbing Wall Europe</a>
          </li>
          <li>
            <a href="https://www.facebook.com/groups/879533755808202/">Climbing@Home</a>
          </li>
          <li>
            <a href="https://www.facebook.com/groups/306173267024741/">DIY Climbing Holds</a> — making
            your own holds
          </li>
          <li>
            <a href="https://www.facebook.com/groups/855959958217729/">Climbing Hold Swap</a> — buying
            and selling used holds
          </li>
          <li>
            <a href="https://www.facebook.com/groups/300675494280399/">Homewall Problem Swap</a> —
            sharing problems
          </li>
          <li>
            <a href="https://www.facebook.com/groups/moonboard/">MoonBoard Climbers Network</a> — run
            by Moon Climbing
          </li>
        </ul>

        <h4>Reddit</h4>
        <ul>
          <li>
            <a href="https://www.reddit.com/r/homewalls/">r/homewalls</a> — builds, questions, and
            inspiration
          </li>
          <li>
            <a href="https://www.reddit.com/r/climbharder/">r/climbharder</a> — training, with plenty
            of board and home wall talk
          </li>
        </ul>

        <h4>More links</h4>
        <ul>
          <li>
            <a href="https://climbingbusinessjournal.com/homewaller/">Homewaller</a> — Climbing
            Business Journal&apos;s curated index of home wall resources
          </li>
        </ul>
      </section>
    </main>
  );
}
