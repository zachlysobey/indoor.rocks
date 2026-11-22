import type { Metadata } from "next";
import styles from "../linkPage.module.css";

// Checked when the static page is built, so the callout drops off with the first deploy after the
// season ends. Its text names the dates, so it stays true if that deploy comes late.
const pcl2027IsOn = Date.now() < Date.parse("2027-03-21T00:00:00Z");

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
        <h3>Competitions</h3>
        <ul>
          <li>
            <a href="https://www.youtube.com/channel/UC2MGuhIaOP6YLpUx106kTQw">World Climbing</a> —
            the sport&apos;s governing body (formerly the IFSC), with live streams and replays from
            the world circuit
          </li>
          <li>
            <a href="https://www.proclimbing.com/">Pro Climbing League</a> — head-to-head bouldering,
            two climbers racing on identical problems
            {pcl2027IsOn && (
              <p className={styles.callout}>
                <strong>2027 season:</strong> Berlin on January 23, Paris on February 13, and the
                final in London on March 20
              </p>
            )}
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCrq7CrFwKG1X5mrDUj_mJrA">Toby Roberts</a> — the
            2024 Olympic champion, behind the scenes of a World Cup season
          </li>
        </ul>
      </section>

      <section>
        <h3>YouTube channels</h3>

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
            <a href="https://www.youtube.com/channel/UCLze_9DjASz_ZxB7UTt2Alw">Bouldering DabRats</a>{" "}
            — a women-led bouldering vlog, started as a counterpart to Bobat
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCgtOMaHBiYvsRYZ77utf8FQ">Eric Karlsson</a> —
            strong bouldering, in the gym and out, from Sweden
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCqiKFGkSZwrbMSfkkd2CQGg">Emil Abrahamsson</a> —
            training experiments and hard projects from a former Swedish team climber
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCyGqObd717uKwGWf_KdNbXw">Anna Hazelnutt</a> —
            a pro climber and slab specialist, with plenty of gym sessions
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCcUQgjlYTq0T01mYq4n9USQ">Mike Boyd Climbs</a> —
            a late starter documenting his progress, grade by grade
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
          <li>
            <a href="https://www.youtube.com/channel/UCuCBztyW7D8y_qE0q0YUiZg">Paradigm Climbing</a>{" "}
            — Charlie Schreiber, a competition coach, on movement, tension and training
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCd41X9UCCXAgruATzShEl4w">Hannah Morris Bouldering</a>{" "}
            — tips for everyday boulderers, often learned from a guest coach
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCZh3d0esu6d67-3JX7H7FCw">
              Power Company Climbing
            </a>{" "}
            — Kris Hampton and Nate Drolet on movement skill and simple, effective training
          </li>
        </ul>
      </section>
    </main>
  );
}
