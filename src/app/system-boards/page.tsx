import type { Metadata } from "next";
import Link from "next/link";
import { systemBoards } from "../data/system-boards";
import styles from "../linkPage.module.css";

export const metadata: Metadata = {
  title: "System Boards · indoor.rocks",
};

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
          {systemBoards.map(board => (
            <li key={board.name}>
              <a href={board.website}>{board.name}</a>, from {board.maker}. {board.description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
