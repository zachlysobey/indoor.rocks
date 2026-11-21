import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymFortMyers: ClimbingGym = {
  name: 'Central Rock Gym Fort Myers',
  website: 'https://centralrockgym.com/fort-myers/',
  parent: centralRockGym,
  address: {
    streetNumber: '6150',
    streetName: 'Exchange Ln',
    city: 'Fort Myers',
    state: 'FL',
    postalCode: '33912',
    country: 'USA',
    latitude: 26.550,
    longitude: -81.840,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
