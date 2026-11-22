"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent, type RefObject } from "react";
import type { ClimbingGym } from "../dataModel";
import { gymSlug } from "../gymSlug";
import { CornerArrows } from "./CornerArrows";
import { focusGym } from "./focus";
import { escapeIsTaken } from "./escapeIsTaken";
import { GymDetails } from "./GymDetails";
import styles from "./GymGroups.module.css";
import { GymMorph } from "./GymMorph";
import { gymRoutes } from "./gymRoutes";
import { openedFromList } from "./openedFromList";

export type GymGroup = {
  // Unique among the groups, and safe in an HTML id.
  id: string;
  name: string;
  // The group's own site, linked beside its name (a chain's).
  website?: string;
  gyms: ClimbingGym[];
};

type Props = {
  groups: GymGroup[];
  selected?: string;
  // The list's URL with a gym in focus, or none.
  route: (slug?: string) => string;
  // The gym under the pointer (or keyboard focus), for anything alongside that wants to show it.
  onHover?: (slug: string | undefined) => void;
  // What scrolls to bring the selected card into view: the page, unless given.
  scroller?: RefObject<HTMLElement | null>;
  // Of each group's name. Its gyms' names are one level below.
  level?: 2 | 3;
};

// Scroll just enough that the item is fully in view, below its group's heading if that's sticky.
// scrollIntoView would scroll every scrollable ancestor, the page included.
function reveal(item: HTMLElement, scroller: HTMLElement | null | undefined, behavior: ScrollBehavior) {
  const heading = item.closest("section")?.querySelector<HTMLElement>(`.${styles.heading}`);
  const offset = heading && getComputedStyle(heading).position === "sticky" ? heading.offsetHeight : 0;
  const view = scroller ? scroller.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
  const box = item.getBoundingClientRect();
  const above = box.top - (view.top + offset);
  const below = box.bottom - view.bottom;
  // Too tall to fit? Keep its top in view.
  const by = above < 0 ? above : below > 0 ? Math.min(above, below) : 0;
  if (by) (scroller ?? window).scrollBy({ top: by, behavior });
}

// Gyms in groups, each collapsed under its name until opened. Picking a gym grows its title into
// its card, in place; picking it again (or the card's corner link) opens the gym's own page, which
// collapses back here.
export function GymGroups({ groups, selected, route, onHover, scroller, level = 2 }: Props) {
  const router = useRouter();
  const GroupHeading = `h${level}` as const;
  const GymHeading = `h${level + 1}` as "h3" | "h4";

  // Groups start collapsed. Selecting a gym (from the URL, or from outside, like a map pin) opens
  // its group, during render rather than in an effect, so its card exists by the time the reveal
  // below runs.
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(() => new Set());
  const [openedFor, setOpenedFor] = useState<string>();
  const selectedGroup = groups.find(group => group.gyms.some(gym => gymSlug(gym) === selected))?.id;
  if (selected !== openedFor) {
    setOpenedFor(selected);
    if (selectedGroup && !expanded.has(selectedGroup)) setExpanded(new Set(expanded).add(selectedGroup));
  }
  // Collapsing the selected gym's group deselects it too, rather than leave it selected but hidden.
  const toggle = (id: string) => {
    if (id === selectedGroup && expanded.has(id)) focusGym(route());
    setExpanded(prev => {
      const next = new Set(prev);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  };

  // A newly selected card scrolls into view. When the list first appears with a gym already
  // selected (a shared link, or collapsing back from the gym's page) it jumps there instead, before
  // paint, so the card is in place for the collapse animation to land on.
  const selectedItem = useRef<HTMLLIElement>(null);
  const mounted = useRef(false);
  useLayoutEffect(() => {
    if (selectedItem.current)
      reveal(selectedItem.current, scroller?.current, mounted.current ? "smooth" : "instant");
    mounted.current = true;
  }, [selected, scroller]);

  // Escape deselects, from anywhere on the page. If keyboard focus is in the card, it moves to the
  // gym's title, which stays, rather than be lost with the card's links.
  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || escapeIsTaken(event)) return;
      const card = selectedItem.current;
      if (card?.contains(document.activeElement))
        card.querySelector<HTMLElement>(`.${styles.title}`)?.focus();
      focusGym(route());
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selected, route]);

  return groups.map(group => {
    const isExpanded = expanded.has(group.id);
    return (
      <section key={group.id} aria-labelledby={`group-${group.id}`}>
        <GroupHeading className={styles.heading}>
          <button
            type="button"
            id={`group-${group.id}`}
            className={styles.toggle}
            aria-expanded={isExpanded}
            aria-controls={`group-${group.id}-gyms`}
            onClick={() => toggle(group.id)}
          >
            <span>{group.name}</span>
            <span className={styles.count}>{group.gyms.length}</span>
          </button>
          {group.website && (
            <a
              href={group.website}
              className={styles.website}
              aria-label={`${group.name}'s website`}
              title={`${group.name}'s website`}
            >
              ↗
            </a>
          )}
        </GroupHeading>
        {/* hidden rather than unrendered, so the prerendered page still links every gym's page. */}
        <ul id={`group-${group.id}-gyms`} className={styles.gyms} hidden={!isExpanded}>
          {group.gyms.map(gym => {
            const slug = gymSlug(gym);
            const isSelected = slug === selected;
            const open = () => openedFromList.mark(slug, route(slug));
            return (
              <GymMorph.Card key={slug} slug={slug}>
                <li
                  ref={isSelected ? selectedItem : undefined}
                  className={isSelected ? styles.selected : undefined}
                >
                  <GymHeading className={styles.name}>
                    {/* Links to the gym's own page, which is what a new tab, a copied link or a
                        crawler gets. A plain click selects the gym here first, then opens its page
                        as the expand link does. A plain <a>, not <Link>: Link would prefetch every
                        gym page in view. */}
                    <a
                      href={gymRoutes.page(slug)}
                      className={styles.title}
                      aria-current={isSelected ? "true" : undefined}
                      onMouseEnter={() => onHover?.(slug)}
                      onMouseLeave={() => onHover?.(undefined)}
                      onFocus={() => onHover?.(slug)}
                      onBlur={() => onHover?.(undefined)}
                      onClick={(event: MouseEvent) => {
                        if (event.metaKey || event.ctrlKey || event.shiftKey) return;
                        event.preventDefault();
                        if (!isSelected) return focusGym(route(slug));
                        open();
                        router.push(gymRoutes.page(slug), { transitionTypes: GymMorph.open });
                      }}
                    >
                      <GymMorph.Name slug={slug}>{gym.name}</GymMorph.Name>
                    </a>
                  </GymHeading>
                  {isSelected && (
                    <>
                      <Link
                        href={gymRoutes.page(slug)}
                        transitionTypes={GymMorph.open}
                        onNavigate={open}
                        className={styles.expand}
                        aria-label={`${gym.name}'s page`}
                        title="Open the gym's page"
                      >
                        <CornerArrows direction="out" />
                      </Link>
                      <GymDetails gym={gym} className={styles.details} />
                    </>
                  )}
                </li>
              </GymMorph.Card>
            );
          })}
        </ul>
      </section>
    );
  });
}
