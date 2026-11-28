import type { AmenityName } from "../../data/amenityMap";
import type { ClimbingGym } from "../../dataModel";
import { countries, regionId, regions } from "../../regions";

export type GymFilter = {
  query: string;
  amenities: AmenityName[];
};

export const noFilter: GymFilter = { query: "", amenities: [] };

// Each reads after "Sort by".
export const sorts = { region: "Region", name: "Name (A–Z)" } as const;

export type GymSort = keyof typeof sorts;

// Lowercase and without accents, so "queretaro" finds Querétaro.
const fold = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

const regionNames = new Map(regions.map(region => [region.id, region.name]));
const countryNames = new Map(countries.map(country => [country.code, country.name]));

// What a search looks through: the gym's name, city, region, country and chain.
const searchText = (gym: ClimbingGym) =>
  fold(
    [
      gym.name,
      gym.address.city,
      regionNames.get(regionId(gym.address)),
      countryNames.get(gym.address.country),
      gym.parent?.name,
    ].join(" "),
  );

// The gyms with every word of the query somewhere in their search text, and every amenity asked for.
export const filterGyms = (gyms: ClimbingGym[], { query, amenities }: GymFilter): ClimbingGym[] => {
  const words = fold(query).split(/\s+/).filter(Boolean);
  return gyms.filter(gym => {
    const text = searchText(gym);
    return (
      words.every(word => text.includes(word)) &&
      amenities.every(name => gym.amenities.some(amenity => amenity.name === name))
    );
  });
};

const collator = new Intl.Collator("en", { sensitivity: "base" });

export const byName = (gyms: ClimbingGym[]): ClimbingGym[] =>
  [...gyms].sort((a, b) => collator.compare(a.name, b.name));
