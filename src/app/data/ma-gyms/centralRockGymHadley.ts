import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymHadley: ClimbingGym = {
  name: 'Central Rock Gym Hadley',
  website: 'https://centralrockgym.com/hadley/',
  parent: centralRockGym,
  address: {
    streetNumber: '165',
    streetName: 'Russell St',
    city: 'Hadley',
    state: 'MA',
    postalCode: '01035',
    country: 'USA',
    latitude: 42.342,
    longitude: -72.585,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
