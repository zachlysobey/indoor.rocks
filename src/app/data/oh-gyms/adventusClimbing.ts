import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const adventusClimbing: ClimbingGym = {
  name: 'Adventus Climbing',
  website: 'https://www.adventusclimbing.com',
  address: {
    streetNumber: '2900',
    streetName: 'N Reynolds Rd',
    city: 'Toledo',
    state: 'OH',
    postalCode: '43615',
    country: 'USA',
    latitude: 41.668,
    longitude: -83.660,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
