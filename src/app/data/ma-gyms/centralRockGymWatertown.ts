import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymWatertown: ClimbingGym = {
  name: 'Central Rock Gym Watertown',
  website: 'https://centralrockgym.com/watertown/',
  description: 'The flagship, with a 48-foot lead wall.',
  parent: centralRockGym,
  address: {
    streetNumber: '74',
    streetName: 'Acton St',
    city: 'Watertown',
    state: 'MA',
    postalCode: '02472',
    country: 'USA',
    latitude: 42.369,
    longitude: -71.199,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga', 'sauna'),
};
