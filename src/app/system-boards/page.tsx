import type { Metadata } from "next";
import Link from "next/link";
import styles from "../linkPage.module.css";

export const metadata: Metadata = {
  title: "System Boards · indoor.rocks",
};

// One entry per board, not per version or layout: each link goes to the maker's own page for it.
export default function SystemBoardsPage() {
  return (
    <main className={styles.main}>
      <h2>System boards</h2>
      <p>
        Standardized training walls: the same holds in the same spots everywhere, lit up by an app
        with a shared library of problems. Many gyms have one, and they&apos;re a popular{" "}
        <Link href="/home-walls">home wall</Link> build.
      </p>

      <section>
        <h3>Boards</h3>
        <ul>
          <li>
            <a href="https://settercloset.com/pages/kb-overview">Kilter Board</a> — from Kilter
            Grips; approachable, with comfy holds
          </li>
          <li>
            <a href="https://tensionclimbing.com/products/tb2-details">Tension Board</a> — from
            Tension Climbing in Denver; wood and dual-texture holds
          </li>
          <li>
            <a href="https://moonclimbing.com/what-is-moonboard">MoonBoard</a> — from Moon Climbing
            in Sheffield; the original
          </li>
          <li>
            <a href="https://grasshopperclimbing.com/">Grasshopper Board</a> — designed by Boone
            Speed; mirrored and adjustable
          </li>
          <li>
            <a href="https://decoy-holds.com/pages/decoy-board">Decoy Board</a> — from Decoy Holds
            in Connecticut; rock-realistic holds and no kickboard
          </li>
        </ul>
      </section>
    </main>
  );
}
