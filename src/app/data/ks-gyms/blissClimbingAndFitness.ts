import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const blissClimbingAndFitness: ClimbingGym = {
  name: 'Bliss Climbing and Fitness',
  website: 'https://climbbliss.com',
  address: {
    streetNumber: '11114',
    streetName: 'E 28th St N',
    city: 'Wichita',
    region: 'KS',
    postalCode: '67226',
    country: 'US',
    latitude: 37.738,
    longitude: -97.207,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
