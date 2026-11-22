import type { Metadata } from "next";
import styles from "../linkPage.module.css";

export const metadata: Metadata = {
  title: "Indoor Climbing TV · indoor.rocks",
};

// Channels link by ID (/channel/UC…) where we have one: handles can be renamed, IDs can't.
export default function IndoorClimbingTvPage() {
  return (
    <main className={styles.main}>
      <h2>Indoor climbing TV</h2>
      <p>Climbing worth watching, mostly from the gym.</p>

      <section>
        <h3>YouTube channels</h3>

        <h4>Competitions</h4>
        <ul>
          <li>
            <a href="https://www.youtube.com/channel/UC2MGuhIaOP6YLpUx106kTQw">World Climbing</a> —
            the sport&apos;s governing body (formerly the IFSC), with live streams and replays from
            the world circuit
          </li>
        </ul>

        <h4>Sessions and vlogs</h4>
        <ul>
          <li>
            <a href="https://www.youtube.com/@magmidt">Magnus Midtbø</a> — challenges, sessions and
            big-name guests
          </li>
          <li>
            <a href="https://www.youtube.com/@boulderingbobat">Bouldering Bobat</a> — the
            long-running London gym bouldering vlog
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCgtOMaHBiYvsRYZ77utf8FQ">Eric Karlsson</a> —
            strong bouldering, in the gym and out, from Sweden
          </li>
        </ul>

        <h4>Technique and training</h4>
        <ul>
          <li>
            <a href="https://www.youtube.com/channel/UCsqZk5V2d44TNLRFSI5aVfg">Hooper&apos;s Beta</a>{" "}
            — technique coaching, training and injury rehab
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCMQzIsi7kwz1_xZjqNhz9kw">Lattice Training</a>{" "}
            — evidence-based training from a climbing coaching company
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC5CSgrlchwozIeFlacSztHw">Catalyst Climbing</a>{" "}
            — Louis Parkinson&apos;s coaching channel: technique, with plenty of fun along the way
          </li>
        </ul>
      </section>
    </main>
  );
}
