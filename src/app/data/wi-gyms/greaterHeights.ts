import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const greaterHeights: ClimbingGym = {
  name: 'Greater Heights Climbing Gym',
  address: {
    streetNumber: '322',
    streetName: '89th Degree St',
    city: 'Fitchburg',
    region: 'WI',
    postalCode: '53713',
    country: 'US',
    latitude: 43.008,
    longitude: -89.423,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
