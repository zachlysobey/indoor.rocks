"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CornerArrows } from "./CornerArrows";
import { GymMorph } from "./GymMorph";
import { gymRoutes } from "./gymRoutes";
import { openedFromList } from "./openedFromList";

type Props = {
  slug: string;
  className?: string;
};

// Is Escape someone else's to handle? Already handled, held with a modifier, mid-composition (an
// IME), or typed into a field.
function escapeIsTaken(event: KeyboardEvent): boolean {
  const target = document.activeElement;
  return (
    event.defaultPrevented ||
    event.isComposing ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    (target instanceof HTMLElement &&
      (target.isContentEditable || target.matches("input, textarea, select")))
  );
}

// The gym page's way back to the list that opened it (the map's, unless another did), with the gym
// in focus. When a list opened this page, Escape does the same: the card grows out of the list like
// a dialog opening, so Escape closes it.
export function CollapseLink({ slug, className }: Props) {
  const router = useRouter();
  // Both only ever differ from the defaults after a client-side navigation from a list, never while
  // hydrating a fresh load, so the server's render always matches.
  const href = openedFromList.from(slug) ?? gymRoutes.map(slug);
  const escapes = openedFromList.is(slug);

  useEffect(() => {
    if (!escapes) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || escapeIsTaken(event)) return;
      router.push(href, { transitionTypes: GymMorph.close });
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [escapes, href, router]);

  return (
    <Link
      href={href}
      transitionTypes={GymMorph.close}
      className={className}
      aria-label="Back to the gym list"
      aria-keyshortcuts={escapes ? "Escape" : undefined}
      title={escapes ? "Back to the gym list (Esc)" : "Back to the gym list"}
    >
      <CornerArrows direction="in" />
    </Link>
  );
}
