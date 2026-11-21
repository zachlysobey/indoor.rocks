import styles from "./CornerArrows.module.css";

// Arrows pointing out of two corners (expand to a gym's page) or into them (collapse back to the
// list). Decorative: the link it sits in carries the label.
const paths = {
  out: "M10 2.5h3.5V6M6 13.5H2.5V10M13.5 2.5 9 7M2.5 13.5 7 9",
  in: "M13.5 6H10V2.5M2.5 10H6v3.5M10 6l3.5-3.5M6 10l-3.5 3.5",
};

export function CornerArrows({ direction }: { direction: keyof typeof paths }) {
  return (
    <svg className={styles.icon} viewBox="0 0 16 16" aria-hidden="true">
      <path d={paths[direction]} />
    </svg>
  );
}
