"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import type { ClimbingGym } from "../dataModel";
import { gymSlug } from "../gymSlug";
import { states } from "../states";
import { GymDetails } from "./GymDetails";
import styles from "./GymExplorer.module.css";
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

const hrefFor = (slug: string | undefined): string => (slug ? `?gym=${slug}` : "?");

// The selection lives in ?gym=, so a gym can be linked to and Back deselects it. pushState rather
// than a router navigation: Next folds it into useSearchParams without fetching the page again.
function select(slug: string | undefined) {
  window.history.pushState(null, "", slug ? hrefFor(slug) : window.location.pathname);
}

// Scroll the list, and only the list, so the item is fully in view below its sticky state heading.
// scrollIntoView would scroll the page as well.
function reveal(list: HTMLElement, item: HTMLElement) {
  const heading = item.closest("section")?.querySelector("h2")?.offsetHeight ?? 0;
  const view = list.getBoundingClientRect();
  const box = item.getBoundingClientRect();
  const above = box.top - (view.top + heading);
  const below = box.bottom - view.bottom;
  // Too tall to fit? Keep its top in view.
  const by = above < 0 ? above : below > 0 ? Math.min(above, below) : 0;
  if (by) list.scrollBy({ top: by, behavior: "smooth" });
}

function Explorer({ gyms, selected }: Props & { selected?: string }) {
  const pins = useMemo(() => gyms.map(toPin), [gyms]);
  // The gym under the pointer (or keyboard focus) in the list, so the map can show its name.
  const [hovered, setHovered] = useState<string>();

  // States start collapsed. Selecting a gym (from the URL or a map pin) opens its state, during
  // render rather than in an effect, so its card exists by the time the reveal below runs.
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(() => new Set());
  const [openedFor, setOpenedFor] = useState<string>();
  if (selected !== openedFor) {
    setOpenedFor(selected);
    const state = gyms.find(gym => gymSlug(gym) === selected)?.address.state;
    if (state && !expanded.has(state)) setExpanded(new Set(expanded).add(state));
  }
  const toggle = (code: string) =>
    setExpanded(prev => {
      const next = new Set(prev);
      if (!next.delete(code)) next.add(code);
      return next;
    });

  // Picking a pin on the map should bring its card into view in the list.
  const list = useRef<HTMLElement>(null);
  const selectedItem = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (list.current && selectedItem.current) reveal(list.current, selectedItem.current);
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
              {/* hidden rather than unrendered, so the prerendered page still links every gym. */}
              <ul id={`state-${state.code}-gyms`} hidden={!isExpanded}>
                {stateGyms.map(gym => {
                  const slug = gymSlug(gym);
                  const isSelected = slug === selected;
                  const next = isSelected ? undefined : slug;
                  return (
                    <li
                      key={slug}
                      ref={isSelected ? selectedItem : undefined}
                      className={isSelected ? styles.selected : undefined}
                    >
                      <h3>
                        <a
                          href={hrefFor(next)}
                          aria-current={isSelected ? "true" : undefined}
                          onMouseEnter={() => setHovered(slug)}
                          onMouseLeave={() => setHovered(undefined)}
                          onFocus={() => setHovered(slug)}
                          onBlur={() => setHovered(undefined)}
                          onClick={(event: MouseEvent) => {
                            if (event.metaKey || event.ctrlKey || event.shiftKey) return;
                            event.preventDefault();
                            select(next);
                          }}
                        >
                          {gym.name}
                        </a>
                      </h3>
                      {isSelected && <GymDetails gym={gym} />}
                    </li>
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
  const selected = useSearchParams().get("gym") ?? undefined;
  return <Explorer {...props} selected={selected} />;
}

// The page is a static export, so ?gym= is only known in the browser. The prerendered HTML has
// nothing selected (the fallback), and the query takes over once the page hydrates.
export function GymExplorer(props: Props) {
  return (
    <Suspense fallback={<Explorer {...props} />}>
      <ExplorerFromQuery {...props} />
    </Suspense>
  );
}
