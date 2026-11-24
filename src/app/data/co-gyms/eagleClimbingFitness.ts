import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const eagleClimbingFitness: ClimbingGym = {
  name: 'Eagle Climbing + Fitness',
  website: 'https://eagleclimbing.com/',
  address: {
    streetNumber: '700',
    streetName: 'Chambers Ave',
    city: 'Eagle',
    region: 'CO',
    postalCode: '81631',
    country: 'US',
    latitude: 39.652,
    longitude: -106.820,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
