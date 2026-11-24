import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theBlockClimbing: ClimbingGym = {
  name: 'The Block Climbing and Fitness',
  website: 'https://theblockclimbing.com',
  description: 'A training-focused bouldering gym with 24-hour member access.',
  address: {
    streetNumber: '903',
    streetName: 'E 4th St',
    city: 'Reno',
    region: 'NV',
    postalCode: '89512',
    country: 'US',
    latitude: 39.530,
    longitude: -119.800,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
