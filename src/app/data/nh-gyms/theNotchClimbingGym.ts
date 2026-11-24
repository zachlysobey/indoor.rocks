import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theNotchClimbingGym: ClimbingGym = {
  name: 'The Notch Climbing Gym',
  website: 'https://www.thenotchclimbing.com/',
  address: {
    streetNumber: '33',
    streetName: 'LaBombard Rd',
    city: 'Lebanon',
    region: 'NH',
    postalCode: '03766',
    country: 'US',
    latitude: 43.626,
    longitude: -72.281,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
