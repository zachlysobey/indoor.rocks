"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, type ReactNode } from "react";
import styles from "./GymViews.module.css";

type View = "cards" | "map";

type Props = {
  cards: ReactNode;
  map: ReactNode;
};

const tabs: { view: View; label: string }[] = [
  { view: "cards", label: "Cards" },
  { view: "map", label: "Map" },
];

function Views({ view, cards, map }: Props & { view: View }) {
  return (
    <>
      <nav className={styles.tabs} aria-label="View">
        {tabs.map(tab => (
          <Link
            key={tab.view}
            href={`?view=${tab.view}`}
            scroll={false}
            aria-current={tab.view === view ? "page" : undefined}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
      {view === "map" ? map : cards}
    </>
  );
}

function ViewFromQuery(props: Props) {
  const view: View = useSearchParams().get("view") === "map" ? "map" : "cards";
  return <Views view={view} {...props} />;
}

// The page is a static export, so ?view= is only known in the browser. The prerendered HTML is
// the cards view (the fallback), and the query takes over once the page hydrates.
export function GymViews(props: Props) {
  return (
    <Suspense fallback={<Views view="cards" {...props} />}>
      <ViewFromQuery {...props} />
    </Suspense>
  );
}
