import type { Metadata } from "next";
import Link from "next/link";
import styles from "../linkPage.module.css";

export const metadata: Metadata = {
  title: "Climbing Holds · indoor.rocks",
};

// Checked when the static page is built, so the callout drops off with the first deploy after the
// sale. Its text names the end date, so it stays true if that deploy comes late.
const escapeSaleIsOn = Date.now() < Date.parse("2026-12-01T00:00:00-05:00");

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

        <h4>Bigger brands</h4>
        <ul>
          <li>
            <a href="https://escapeclimbing.com/">Escape Climbing</a> — made to order in Minnesota,
            plus a{" "}
            <a href="https://escapeclimbing.com/products/monthly-hold-subscription-2025">
              monthly hold subscription
            </a>{" "}
            at 30–40% off
            {escapeSaleIsOn && (
              <p className={styles.callout}>
                <strong>On sale:</strong> Black November, with new deals each week through November
                30
              </p>
            )}
          </li>
          <li>
            <a href="https://www.atomikclimbingholds.com/">Atomik</a> — made in Utah; a huge range,
            lots of value packs, and quick shipping
          </li>
          <li>
            <a href="https://settercloset.com/">Kilter Grips</a> — sold through Kilter&apos;s Setter
            Closet shop
          </li>
          <li>
            <a href="https://www.metoliusclimbing.com/">Metolius</a> — widely stocked hold packs
          </li>
          <li>
            <a href="https://pusher.world/">Pusher</a>
          </li>
          <li>
            <a href="https://candyshopclimbing.com/collections/rock-candy-holds">Rock Candy</a> —
            from Akron, Ohio
          </li>
          <li>
            <a href="https://soillholds.com/">So iLL</a>
          </li>
          <li>
            <a href="https://teknikhandholds.com/">Teknik</a> — from Canada, a gym staple
          </li>
        </ul>

        <h4>Smaller makers</h4>
        <ul>
          <li>
            <a href="https://climb-club.com">Climb Club</a>
          </li>
          <li>
            <a href="https://cragcreationholds.ca/">Crag Creation</a> — 3D-printed holds from Canada
          </li>
          <li>
            <a href="https://decoy-holds.com/">Decoy</a> — rock-realistic shapes from Connecticut,
            and the makers of the Decoy Board
          </li>
          <li>
            <a href="https://www.rockymountainclimbinggear.com">Rocky Mountain Climbing Gear</a> —
            inexpensive, rock-like holds
          </li>
        </ul>

        <h4>Europe</h4>
        <ul>
          <li>
            <a href="https://batholds.com/en/">Bat Holds</a> — from Poland
          </li>
          <li>
            <a href="https://www.euroholds.com/en/">Euroholds</a> — from Spain
          </li>
          <li>
            <a href="https://www.greenholds.eu/">Greenholds</a>
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

        <h4>Shops</h4>
        <ul>
          <li>
            <a href="https://www.theholdroom.com/">The Hold Room</a> — an Arizona setter supply shop
            carrying many brands
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
          <li>
            <a href="https://5tendons.com/how-to-guide/">5tendons how-to guide</a>
          </li>
          <li>
            <a href="https://commercial3dfiles.com/collections/sender-grips-diy-climbing-volume-plans-for-gyms-and-home-walls">
              Sender Grips volume plans
            </a>{" "}
            — DIY plans for building your own volumes
          </li>
        </ul>
      </section>
    </main>
  );
}
