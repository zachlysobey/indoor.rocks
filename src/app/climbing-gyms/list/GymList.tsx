"use client";

import { useMemo, useState } from "react";
import { amenityMap, type AmenityName } from "../../data/amenityMap";
import type { ClimbingGym } from "../../dataModel";
import { gymSlug } from "../../gymSlug";
import { gymsByCountry } from "../../regions";
import { gymRoutes } from "../gymRoutes";
import { byName, filterGyms, noFilter, sorts, type GymFilter, type GymSort } from "./gymFilter";
import styles from "./page.module.css";

type Props = {
  gyms: ClimbingGym[];
  // The state it starts in. The prerendered page starts with every gym, by region.
  initialFilter?: GymFilter;
  initialSort?: GymSort;
};

const amenityNames = Object.keys(amenityMap) as AmenityName[];

// A plain <a>, not <Link>: Link would prefetch every gym page in view, which here is all of them.
const GymLink = ({ gym }: { gym: ClimbingGym }) => <a href={gymRoutes.page(gymSlug(gym))}>{gym.name}</a>;

// Every gym, searchable, filterable by amenity, and sorted by region or by name.
export function GymList({ gyms, initialFilter = noFilter, initialSort = "region" }: Props) {
  const [filter, setFilter] = useState(initialFilter);
  const [sort, setSort] = useState(initialSort);
  const shown = useMemo(() => filterGyms(gyms, filter), [gyms, filter]);

  const toggleAmenity = (name: AmenityName) =>
    setFilter(current => ({
      ...current,
      amenities: current.amenities.includes(name)
        ? current.amenities.filter(other => other !== name)
        : [...current.amenities, name],
    }));

  return (
    <>
      <search className={styles.controls}>
        <input
          type="search"
          aria-label="Search gyms"
          placeholder="Name, city, region or chain"
          value={filter.query}
          onChange={event => setFilter(current => ({ ...current, query: event.target.value }))}
        />
        <select aria-label="Sort gyms" value={sort} onChange={event => setSort(event.target.value as GymSort)}>
          {Object.entries(sorts).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <fieldset className={styles.amenities}>
          <legend>Has</legend>
          {amenityNames.map(name => (
            <label key={name}>
              <input
                type="checkbox"
                checked={filter.amenities.includes(name)}
                onChange={() => toggleAmenity(name)}
              />
              {amenityMap[name].label}
            </label>
          ))}
        </fieldset>
      </search>
      <output className={styles.status}>
        {shown.length === 0
          ? "No gyms match"
          : shown.length === gyms.length
            ? `${gyms.length} gyms`
            : `${shown.length} of ${gyms.length} gyms`}
      </output>
      {sort === "name" ? <ByName gyms={shown} /> : <ByRegion gyms={shown} />}
    </>
  );
}

// One list, A–Z, each gym with where it is, since there are no headings to say.
function ByName({ gyms }: { gyms: ClimbingGym[] }) {
  return (
    <ul className={styles.columns}>
      {byName(gyms).map(gym => (
        <li key={gymSlug(gym)}>
          <GymLink gym={gym} />
          <span className={styles.where}>
            {gym.address.city}, {gym.address.region}
          </span>
        </li>
      ))}
    </ul>
  );
}

// By country then region, each country's regions in as many columns as fit.
function ByRegion({ gyms }: { gyms: ClimbingGym[] }) {
  return gymsByCountry(gyms).map(country => (
    <section key={country.id} aria-labelledby={`country-${country.id}`}>
      <h3 id={`country-${country.id}`} className={styles.country}>
        <span>{country.name}</span>
        <span className={styles.count}>{country.gymCount}</span>
      </h3>
      <div className={styles.columns}>
        {country.regions.map(group => (
          <section key={group.id} aria-labelledby={`region-${group.id}`}>
            <h4 id={`region-${group.id}`}>
              <span>{group.name}</span>
              <span className={styles.count}>{group.gyms.length}</span>
            </h4>
            <ul>
              {group.gyms.map(gym => (
                <li key={gymSlug(gym)}>
                  <GymLink gym={gym} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  ));
}
