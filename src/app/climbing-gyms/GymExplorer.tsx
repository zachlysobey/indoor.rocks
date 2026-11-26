"use client";

import { useMemo, useRef, useState } from "react";
import type { ClimbingGym } from "../dataModel";
import { gymSlug } from "../gymSlug";
import { gymsByCountry } from "../regions";
import { focusGym, WithFocus } from "./focus";
import styles from "./GymExplorer.module.css";
import { GymGroups } from "./GymGroups";
import { gymRoutes } from "./gymRoutes";
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

// Module-level, so it's the same function every render: PinMap redraws when onSelect changes.
const selectPin = (slug: string) => focusGym(gymRoutes.map(slug));

// The gyms by country and region, beside a map of them all. The list and the map share the gym in ?focus=: a pin
// opens its gym's card in the list, and the list's gym shows on the map.
function Explorer({ gyms, selected }: Props & { selected?: string }) {
  const pins = useMemo(() => gyms.map(toPin), [gyms]);
  const countries = useMemo(() => gymsByCountry(gyms), [gyms]);
  // The gym under the pointer (or keyboard focus) in the list, so the map can show its name.
  const [hovered, setHovered] = useState<string>();
  const list = useRef<HTMLElement>(null);

  return (
    <div className={styles.explorer}>
      <section ref={list} className={styles.list} aria-label="Climbing gyms">
        {countries.map(country => (
          <section key={country.id} aria-labelledby={`country-${country.id}`}>
            <h2 id={`country-${country.id}`} className={styles.country}>
              <span>{country.name}</span>
              <span className={styles.count}>{country.gymCount}</span>
            </h2>
            <GymGroups
              groups={country.regions}
              selected={selected}
              route={gymRoutes.map}
              onHover={setHovered}
              scroller={list}
              level={3}
            />
          </section>
        ))}
      </section>
      <PinMap
        className={styles.map}
        pins={pins}
        selected={selected}
        hovered={hovered}
        onSelect={selectPin}
      />
    </div>
  );
}

export function GymExplorer(props: Props) {
  return <WithFocus>{selected => <Explorer {...props} selected={selected} />}</WithFocus>;
}
