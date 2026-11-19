import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymWarwick: ClimbingGym = {
  name: 'Central Rock Gym Warwick',
  website: 'https://centralrockgym.com/warwick/',
  parent: centralRockGym,
  address: {
    streetNumber: '275',
    streetName: 'W Natick Rd',
    city: 'Warwick',
    state: 'RI',
    postalCode: '02886',
    country: 'USA',
    latitude: 41.721,
    longitude: -71.488,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
