import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const miltonRockGym: ClimbingGym = {
  name: 'Milton Rock Gym',
  website: 'https://www.miltonrockgym.com/',
  address: {
    streetNumber: '45',
    streetName: 'S Front St',
    city: 'Milton',
    state: 'PA',
    postalCode: '17847',
    country: 'USA',
    latitude: 41.009,
    longitude: -76.846,
  },
  amenities: amenities('bouldering'),
};
