import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const methodClimbing: ClimbingGym = {
  name: 'Method Climbing',
  website: 'https://methodclimb.com/',
  address: {
    streetNumber: '16',
    streetName: 'Lombardy St',
    city: 'Newark',
    region: 'NJ',
    postalCode: '07102',
    country: 'US',
    latitude: 40.74297,
    longitude: -74.16852,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
};
