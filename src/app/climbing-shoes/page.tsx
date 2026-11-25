import type { Metadata } from "next";
import styles from "../linkPage.module.css";

export const metadata: Metadata = {
  title: "Climbing Shoes · indoor.rocks",
};

export default function ClimbingShoesPage() {
  return (
    <main className={styles.main}>
      <h2>Climbing shoes</h2>
      <p>The biggest brands, most popular first, and advice on picking a pair and keeping them fresh.</p>

      <section>
        <h3>Brands</h3>
        <ul>
          <li>
            <a href="https://www.lasportivausa.com/">La Sportiva</a> — from Italy, and the most
            popular in climbers&apos; polls
          </li>
          <li>
            <a href="https://us.scarpa.com/">Scarpa</a> — also from Italy, and La Sportiva&apos;s
            closest rival
          </li>
          <li>
            <a href="https://www.evolvsports.com/">Evolv</a> — from Southern California
          </li>
          <li>
            <a href="https://tenaya.net/">Tenaya</a> — from Spain
          </li>
          <li>
            <a href="https://www.adidas.com/us/five_ten-climbing-shoes">Five Ten</a> — now part of
            adidas
          </li>
          <li>
            <a href="https://blackdiamondequipment.com/en_US/content/rock-shoes">Black Diamond</a> —
            from Salt Lake City, and better known for climbing hardware
          </li>
          <li>
            <a href="https://www.ocun.com/">Ocun</a> — from the Czech Republic
          </li>
          <li>
            <a href="https://madrock.com/">Mad Rock</a> — from Southern California, with a focus on
            value
          </li>
          <li>
            <a href="https://www.soillholds.com/">So iLL</a> — from St. Louis, and also a big name in
            climbing holds
          </li>
        </ul>
      </section>

      <section>
        <h3>Choosing a pair</h3>
        <ul>
          <li>
            <a href="https://www.rei.com/learn/expert-advice/rock-shoes.html">REI: How to choose</a>{" "}
            — neutral, moderate or aggressive, and how they should fit
          </li>
          <li>
            <a href="https://www.mec.ca/en/explore/choose-your-climbing-shoes">MEC: How to choose</a>{" "}
            — shape, closures, rubber and stiffness
          </li>
        </ul>
      </section>

      <section>
        <h3>Cleaning and care</h3>
        <p>Makers disagree on washing, especially leather, so check your own pair&apos;s first.</p>
        <ul>
          <li>
            <a href="https://www.rei.com/learn/expert-advice/rock-shoe-care-repair.html">
              REI: Care and resoling
            </a>{" "}
            — cleaning, odor, and when to resole
          </li>
          <li>
            <a href="https://scarpa.co.uk/blogs/blog/how-to-clean-your-climbing-shoes">
              Scarpa: How to clean
            </a>{" "}
            — a step-by-step hand wash, with just warm water
          </li>
          <li>
            <a href="https://evolvsports.com/caring-for-your-shoes/">Evolv: Caring for your shoes</a>{" "}
            — hand-wash synthetics, but only wipe down leather
          </li>
          <li>
            <a href="https://www.lasportivausa.com/blogs/blog/climibing-shoe-care">
              La Sportiva: Climbing shoe care
            </a>{" "}
            — wiping down, freshening rubber, and drying
          </li>
        </ul>
      </section>
    </main>
  );
}
