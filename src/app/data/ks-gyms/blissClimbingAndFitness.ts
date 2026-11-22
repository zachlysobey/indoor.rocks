import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const blissClimbingAndFitness: ClimbingGym = {
  name: 'Bliss Climbing and Fitness',
  website: 'https://climbbliss.com',
  address: {
    streetNumber: '11114',
    streetName: 'E 28th St N',
    city: 'Wichita',
    state: 'KS',
    postalCode: '67226',
    country: 'USA',
    latitude: 37.738,
    longitude: -97.207,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
