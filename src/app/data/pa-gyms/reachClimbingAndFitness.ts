import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const reachClimbingAndFitness: ClimbingGym = {
  name: 'Reach Climbing & Fitness',
  website: 'https://reachclimbing.com/',
  address: {
    streetNumber: '401',
    streetName: 'E 4th St',
    city: 'Bridgeport',
    state: 'PA',
    postalCode: '19405',
    country: 'USA',
    latitude: 40.104,
    longitude: -75.341,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
