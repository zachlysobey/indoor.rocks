import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const alpineClimbingAdventureFitness: ClimbingGym = {
  name: 'Alpine Climbing Adventure Fitness',
  website: 'https://climbatalpine.com',
  address: {
    streetNumber: '1450',
    streetName: 'Garrison Way',
    city: 'Ripon',
    state: 'CA',
    postalCode: '95366',
    country: 'USA',
    latitude: 37.748,
    longitude: -121.128,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
