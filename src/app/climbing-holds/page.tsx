import type { Metadata } from "next";
import Link from "next/link";
import styles from "../linkPage.module.css";

export const metadata: Metadata = {
  title: "Climbing Holds · indoor.rocks",
};

export default function ClimbingHoldsPage() {
  return (
    <main className={styles.main}>
      <h2>Climbing holds</h2>
      <p>Where to get holds for a wall of your own: new, used, or made yourself.</p>

      <section>
        <h3>New</h3>
        <ul>
          <li>
            <a href="https://climbingbusinessjournal.com/brand-directory/climbing-holds-macros-volumes/">
              Hold brand directory
            </a>{" "}
            — Climbing Business Journal&apos;s list of hold, macro and volume makers worldwide
          </li>
        </ul>

        <h4>Plastic</h4>
        <ul>
          <li>
            <a href="https://www.atomikclimbingholds.com/">Atomik</a> — made in Utah; a huge range,
            lots of value packs, and quick shipping
          </li>
          <li>
            <a href="https://www.etsy.com/shop/EscapeClimbing">Escape Climbing</a> — designed in
            Minnesota, with factory seconds for cheap
          </li>
          <li>
            <a href="https://settercloset.com/">Kilter Grips</a> — sold through Kilter&apos;s Setter
            Closet shop
          </li>
          <li>
            <a href="https://soillholds.com/">So iLL</a>
          </li>
          <li>
            <a href="https://teknikhandholds.com/">Teknik</a> — from Canada, a gym staple
          </li>
          <li>
            <a href="https://www.metoliusclimbing.com/">Metolius</a> — widely stocked hold packs
          </li>
        </ul>

        <h4>Wood</h4>
        <p>Easier on skin, so popular for training walls and boards.</p>
        <ul>
          <li>
            <a href="https://www.tensionclimbing.com/">Tension Climbing</a> — hardwood holds from
            the makers of the Tension Board
          </li>
          <li>
            <a href="https://www.metoliusclimbing.com/wood_grips_hold_set.html">Metolius Wood Grips</a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Used</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/groups/855959958217729/">Climbing Hold Swap</a> —
            Facebook group for buying and selling used holds
          </li>
          <li>
            <a href="https://www.ebay.com/b/Climbing-Holds/75204/bn_1946382">eBay</a>
          </li>
          <li>
            <Link href="/climbing-gyms">Your local gym</Link> — some sell off retired holds, so
            it&apos;s worth asking
          </li>
        </ul>
      </section>

      <section>
        <h3>Make your own</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/groups/306173267024741/">DIY Climbing Holds</a> —
            Facebook group for pouring, carving and shaping your own
          </li>
        </ul>
      </section>
    </main>
  );
}
