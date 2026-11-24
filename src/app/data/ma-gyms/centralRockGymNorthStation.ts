import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymNorthStation: ClimbingGym = {
  name: 'Central Rock Gym North Station',
  website: 'https://centralrockgym.com/northstation/',
  description: 'Bouldering only, downtown by North Station.',
  parent: centralRockGym,
  address: {
    streetNumber: '99',
    streetName: 'Beverly St',
    city: 'Boston',
    region: 'MA',
    postalCode: '02114',
    country: 'US',
    latitude: 42.365,
    longitude: -71.059,
  },
  amenities: amenities('bouldering', 'yoga'),
};
