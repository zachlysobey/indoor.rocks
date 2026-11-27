import type { AmenityName } from "./data/amenityMap";

export type Address = {
  streetNumber: string;
  streetName: string;
  city: string;
  // ISO 3166 codes, listed in regions.ts: the 3166-2 region without its country prefix ("NY", "BC",
  // "CMX"), and the 3166-1 alpha-2 country ("US", "CA", "MX").
  region: string;
  postalCode: string;
  country: string;
  latitude: number;
  longitude: number;
}

export type Place = {
  name: string;
  description?: string;
  website?: string;
  address: Address;
};

export type Gym = Place & {
  name: string;
  amenities: GymAmenity[];
};

export type GymAmenity = {
  name: AmenityName;
  label: string;
  description?: string;
};

export type ClimbingGym = Gym & {
  parent?: Company;
}

export type Company = {
  name: string;
  // The chain's own home, covering all its gyms. Set only when a source shows it, as for a gym.
  website?: string;
};

export type DataModel = {
  climbingGyms: ClimbingGym[];
};

