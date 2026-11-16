import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const methodClimbing: ClimbingGym = {
  name: 'Method Climbing',
  website: 'https://methodclimb.com/',
  address: {
    streetNumber: '16',
    streetName: 'Lombardy St',
    city: 'Newark',
    state: 'NJ',
    postalCode: '07102',
    country: 'USA',
    latitude: 40.74297,
    longitude: -74.16852,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
};
