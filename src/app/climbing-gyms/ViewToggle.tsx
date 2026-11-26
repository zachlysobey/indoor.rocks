import Link from "next/link";
import { gymRoutes } from "./gymRoutes";
import styles from "./ViewToggle.module.css";

const views = [
  { name: "map", label: "Map", href: gymRoutes.map() },
  { name: "list", label: "List", href: gymRoutes.list() },
] as const;

// Switches between the two views of every gym: on a map, or all on one page.
export function ViewToggle({ current }: { current: (typeof views)[number]["name"] }) {
  return (
    <nav aria-label="Gym views" className={styles.toggle}>
      {views.map(view => (
        <Link key={view.name} href={view.href} aria-current={view.name === current ? "page" : undefined}>
          {view.label}
        </Link>
      ))}
    </nav>
  );
}
