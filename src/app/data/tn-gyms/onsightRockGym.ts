import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const onsightRockGym: ClimbingGym = {
  name: 'Onsight Rock Gym',
  website: 'https://www.onsightrockgym.com',
  address: {
    streetNumber: '5335',
    streetName: 'Western Ave',
    city: 'Knoxville',
    state: 'TN',
    postalCode: '37921',
    country: 'USA',
    latitude: 35.995,
    longitude: -83.990,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
