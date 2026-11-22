import type { Metadata } from "next";
import Link from "next/link";
import styles from "../linkPage.module.css";

export const metadata: Metadata = {
  title: "Climbing on Social Media · indoor.rocks",
};

// Instagram has no stable ID URLs like YouTube's /channel/UC…, so these link by handle.
export default function ClimbingSocialMediaPage() {
  return (
    <main className={styles.main}>
      <h2>Climbing on social media</h2>
      <p>
        Accounts worth following, by platform. For YouTube, see{" "}
        <Link href="/tv">indoor climbing TV</Link>.
      </p>

      <section>
        <h3>Instagram</h3>

        <h4>Climbers</h4>
        <ul>
          <li>
            <a href="https://www.instagram.com/magmidt/">Magnus Midtbø</a> — challenges, sessions
            and big-name guests, in short form
          </li>
          <li>
            <a href="https://www.instagram.com/janja_garnbret/">Janja Garnbret</a> — the two-time
            Olympic champion, in competition and on hard rock
          </li>
          <li>
            <a href="https://www.instagram.com/natalia_grossman/">Natalia Grossman</a> — a World
            Cup and World Championship bouldering champion from the US team
          </li>
          <li>
            <a href="https://www.instagram.com/annahazelnutt/">Anna Hazelnutt</a> — a pro climber
            and slab specialist, as fun here as on her YouTube channel
          </li>
          <li>
            <a href="https://www.instagram.com/_hannahmorris_/">Hannah Morris</a> — bouldering tips
            for everyday climbers, from the largest women-led bouldering channel
          </li>
        </ul>

        <h4>Competitions</h4>
        <ul>
          <li>
            <a href="https://www.instagram.com/worldclimbing/">World Climbing</a> — the
            sport&apos;s governing body (formerly the IFSC), with highlights from the world circuit
          </li>
          <li>
            <a href="https://www.instagram.com/usaclimbing/">USA Climbing</a> — the US governing
            body: national team, youth and collegiate championships
          </li>
        </ul>

        <h4>Training</h4>
        <ul>
          <li>
            <a href="https://www.instagram.com/latticetraining/">Lattice Training</a> — short,
            evidence-based training tips from a climbing coaching company
          </li>
          <li>
            <a href="https://www.instagram.com/crimpd/">Crimpd</a> — workouts from the climbing
            training app
          </li>
        </ul>

        <h4>Board climbing</h4>
        <ul>
          <li>
            <a href="https://www.instagram.com/kilterboard/">Kilter Board</a> — board beta and
            reposts from Kilter climbers worldwide
          </li>
          <li>
            <a href="https://www.instagram.com/tensionboard/">Tension Board</a> — the official
            Tension Board account, featuring climbs from its community
          </li>
        </ul>

        <h4>Setting and silliness</h4>
        <ul>
          <li>
            <a href="https://www.instagram.com/expensiveboulders/">Expensive Boulders</a> — gym
            boulders with an estimate of what their holds and volumes cost, run by a head setter
          </li>
          <li>
            <a href="https://www.instagram.com/bomberclimbingmemes/">Bomber Climbing Memes</a> —
            climbing jokes, best sent to your belay partner
          </li>
        </ul>
      </section>
    </main>
  );
}
