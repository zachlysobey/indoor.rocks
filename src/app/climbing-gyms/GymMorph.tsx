import { ViewTransition, type ReactNode } from "react";
import "./GymMorph.css";
import styles from "./GymMorph.module.css";

// The animation between a gym's card in the list and the gym's own page: the card grows into the
// page (and shrinks back), its name moves on its own, and the pages around it fade. Everything that
// knows about view transitions is here and in GymMorph.css.
//
// It plays only on navigations tagged with one of these types, by the expand and collapse links.
// Any other navigation (the header nav, Back) swaps pages as usual.
const OPEN = "gym-open";
const CLOSE = "gym-close";

// A class for both tagged navigations, and nothing for any other.
const onMorph = (className: string) => ({ [OPEN]: className, [CLOSE]: className, default: "none" });

type Props = {
  slug: string;
  children: ReactNode;
};

// The card, in the list and on the page. Names pair the two, so they're unique per gym.
function Card({ slug, children }: Props) {
  return (
    <ViewTransition name={`gym-card-${slug}`} share={onMorph("gym-card")} default="none">
      {children}
    </ViewTransition>
  );
}

// The gym's name, which moves and scales by itself so its text never stretches with the card.
function Name({ slug, children }: Props) {
  return (
    <ViewTransition name={`gym-name-${slug}`} share={onMorph("gym-name")} default="none">
      <span className={styles.name}>{children}</span>
    </ViewTransition>
  );
}

// Everything around the card: the list page fades out as the gym's page fades in, and back.
function Page({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter={onMorph("gym-page")} exit={onMorph("gym-page")} default="none">
      {children}
    </ViewTransition>
  );
}

// open and close are the transitionTypes for the expand and collapse links.
export const GymMorph = { Card, Name, Page, open: [OPEN], close: [CLOSE] };
