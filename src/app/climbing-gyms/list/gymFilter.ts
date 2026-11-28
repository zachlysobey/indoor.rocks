import type { AmenityName } from "../../data/amenityMap";
import type { ClimbingGym } from "../../dataModel";
import { gymChains } from "../../gymChains";
import { countries, regionId, regions } from "../../regions";

export type GymFilter = {
  query: string;
  // A country's ISO code, or "" for any.
  country: string;
  // Chains by company name, any of which will do. None means any gym, chain or not.
  chains: string[];
  amenities: AmenityName[];
};

export const noFilter: GymFilter = { query: "", country: "", chains: [], amenities: [] };

// A gym's chain, as the chains filter names it: its company's name, or "" for an independent.
export const independent = "";
export const chainOf = (gym: ClimbingGym): string => gym.parent?.name ?? independent;

// The chains to pick from, each with how many gyms it has: independents first, then the chains,
// biggest first.
export const chainChoices = (gyms: ClimbingGym[]): { chain: string; count: number }[] => [
  { chain: independent, count: gyms.filter(gym => chainOf(gym) === independent).length },
  ...gymChains(gyms).map(({ company, gyms }) => ({ chain: company.name, count: gyms.length })),
];

// How many filters are on, besides the search: the country, each chain and each amenity.
export const filterCount = ({ country, chains, amenities }: GymFilter): number =>
  (country ? 1 : 0) + chains.length + amenities.length;

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

// The gyms in the country asked for and any of the chains asked for, with every word of the query
// somewhere in their search text and every amenity asked for.
export const filterGyms = (gyms: ClimbingGym[], { query, country, chains, amenities }: GymFilter): ClimbingGym[] => {
  const words = fold(query).split(/\s+/).filter(Boolean);
  return gyms.filter(gym => {
    const text = searchText(gym);
    return (
      (!country || gym.address.country === country) &&
      (chains.length === 0 || chains.includes(chainOf(gym))) &&
      words.every(word => text.includes(word)) &&
      amenities.every(name => gym.amenities.some(amenity => amenity.name === name))
    );
  });
};

const collator = new Intl.Collator("en", { sensitivity: "base" });

export const byName = (gyms: ClimbingGym[]): ClimbingGym[] =>
  [...gyms].sort((a, b) => collator.compare(a.name, b.name));
