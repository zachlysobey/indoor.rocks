import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymTampa: ClimbingGym = {
  name: 'Central Rock Gym Tampa',
  website: 'https://centralrockgym.com',
  parent: centralRockGym,
  address: {
    streetNumber: '4479',
    streetName: 'W Gandy Blvd',
    city: 'Tampa',
    state: 'FL',
    postalCode: '33611',
    country: 'USA',
    latitude: 27.893,
    longitude: -82.522,
  },
  amenities: amenities('bouldering', 'auto-belays', 'yoga'),
};
