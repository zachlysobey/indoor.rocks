"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import type { ClimbingGym } from "../dataModel";
import { gymSlug } from "../gymSlug";
import { states } from "../states";
import { CornerArrows } from "./CornerArrows";
import { GymDetails } from "./GymDetails";
import styles from "./GymExplorer.module.css";
import { GymMorph } from "./GymMorph";
import { gymRoutes } from "./gymRoutes";
import { openedFromList } from "./openedFromList";
import { PinMap, type Pin } from "./PinMap";

type Props = {
  gyms: ClimbingGym[];
};

const toPin = (gym: ClimbingGym): Pin => ({
  id: gymSlug(gym),
  lat: gym.address.latitude,
  lng: gym.address.longitude,
  title: gym.name,
});

// The selection lives in ?focus= (gymRoutes.list), so a gym can be linked to and Back deselects it.
// pushState rather than a router navigation: Next folds it into useSearchParams without fetching
// the page again.
function select(slug: string | undefined) {
  window.history.pushState(null, "", gymRoutes.list(slug));
}

// Scroll the list, and only the list, so the item is fully in view below its sticky state heading.
// scrollIntoView would scroll the page as well.
function reveal(list: HTMLElement, item: HTMLElement, behavior: ScrollBehavior) {
  const heading = item.closest("section")?.querySelector("h2")?.offsetHeight ?? 0;
  const view = list.getBoundingClientRect();
  const box = item.getBoundingClientRect();
  const above = box.top - (view.top + heading);
  const below = box.bottom - view.bottom;
  // Too tall to fit? Keep its top in view.
  const by = above < 0 ? above : below > 0 ? Math.min(above, below) : 0;
  if (by) list.scrollBy({ top: by, behavior });
}

function Explorer({ gyms, selected }: Props & { selected?: string }) {
  const router = useRouter();
  const pins = useMemo(() => gyms.map(toPin), [gyms]);
  // The gym under the pointer (or keyboard focus) in the list, so the map can show its name.
  const [hovered, setHovered] = useState<string>();

  // States start collapsed. Selecting a gym (from the URL or a map pin) opens its state, during
  // render rather than in an effect, so its card exists by the time the reveal below runs.
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(() => new Set());
  const [openedFor, setOpenedFor] = useState<string>();
  const selectedState = gyms.find(gym => gymSlug(gym) === selected)?.address.state;
  if (selected !== openedFor) {
    setOpenedFor(selected);
    if (selectedState && !expanded.has(selectedState))
      setExpanded(new Set(expanded).add(selectedState));
  }
  // Collapsing the selected gym's state deselects it too, rather than leave it selected but hidden.
  const toggle = (code: string) => {
    if (code === selectedState && expanded.has(code)) select(undefined);
    setExpanded(prev => {
      const next = new Set(prev);
      if (!next.delete(code)) next.add(code);
      return next;
    });
  };

  // Picking a pin on the map scrolls its card into view in the list. When the list first appears
  // with a gym already selected (a shared link, or collapsing back from the gym's page) it jumps
  // there instead, before paint, so the card is in place for the collapse animation to land on.
  const list = useRef<HTMLElement>(null);
  const selectedItem = useRef<HTMLLIElement>(null);
  const mounted = useRef(false);
  useLayoutEffect(() => {
    if (list.current && selectedItem.current)
      reveal(list.current, selectedItem.current, mounted.current ? "smooth" : "instant");
    mounted.current = true;
  }, [selected]);

  // Escape deselects, from anywhere on the page. If keyboard focus is in the card, it moves to the
  // gym's title, which stays, rather than be lost with the card's links.
  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      const card = selectedItem.current;
      if (card?.contains(document.activeElement)) card.querySelector<HTMLElement>("h3 a")?.focus();
      select(undefined);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <div className={styles.explorer}>
      <section ref={list} className={styles.list} aria-label="Climbing gyms">
        {states.map(state => {
          const stateGyms = gyms.filter(gym => gym.address.state === state.code);
          const isExpanded = expanded.has(state.code);
          return (
            <section key={state.code} aria-labelledby={`state-${state.code}`}>
              <h2>
                <button
                  type="button"
                  id={`state-${state.code}`}
                  aria-expanded={isExpanded}
                  aria-controls={`state-${state.code}-gyms`}
                  onClick={() => toggle(state.code)}
                >
                  <span>{state.name}</span>
                  <span className={styles.count}>{stateGyms.length}</span>
                </button>
              </h2>
              {/* hidden rather than unrendered, so the prerendered page still links every gym's page. */}
              <ul id={`state-${state.code}-gyms`} hidden={!isExpanded}>
                {stateGyms.map(gym => {
                  const slug = gymSlug(gym);
                  const isSelected = slug === selected;
                  return (
                    <GymMorph.Card key={slug} slug={slug}>
                      <li
                        ref={isSelected ? selectedItem : undefined}
                        className={isSelected ? styles.selected : undefined}
                      >
                        <h3>
                          {/* Links to the gym's own page, which is what a new tab, a copied link or
                              a crawler gets. A plain click selects the gym here first, then opens
                              its page as the expand link does. A plain <a>, not <Link>: Link would
                              prefetch every gym page in view. */}
                          <a
                            href={gymRoutes.page(slug)}
                            aria-current={isSelected ? "true" : undefined}
                            onMouseEnter={() => setHovered(slug)}
                            onMouseLeave={() => setHovered(undefined)}
                            onFocus={() => setHovered(slug)}
                            onBlur={() => setHovered(undefined)}
                            onClick={(event: MouseEvent) => {
                              if (event.metaKey || event.ctrlKey || event.shiftKey) return;
                              event.preventDefault();
                              if (!isSelected) return select(slug);
                              openedFromList.mark(slug);
                              router.push(gymRoutes.page(slug), {
                                transitionTypes: GymMorph.open,
                              });
                            }}
                          >
                            <GymMorph.Name slug={slug}>{gym.name}</GymMorph.Name>
                          </a>
                        </h3>
                        {isSelected && (
                          <>
                            <Link
                              href={gymRoutes.page(slug)}
                              transitionTypes={GymMorph.open}
                              onNavigate={() => openedFromList.mark(slug)}
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
        })}
      </section>
      <PinMap
        className={styles.map}
        pins={pins}
        selected={selected}
        hovered={hovered}
        onSelect={select}
      />
    </div>
  );
}

function ExplorerFromQuery(props: Props) {
  const selected = useSearchParams().get("focus") ?? undefined;
  return <Explorer {...props} selected={selected} />;
}

// The page is a static export, so ?focus= is only known in the browser. The prerendered HTML has
// nothing selected (the fallback), and the query takes over once the page hydrates.
export function GymExplorer(props: Props) {
  return (
    <Suspense fallback={<Explorer {...props} />}>
      <ExplorerFromQuery {...props} />
    </Suspense>
  );
}
