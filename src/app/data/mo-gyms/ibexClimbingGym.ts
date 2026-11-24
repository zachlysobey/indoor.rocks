import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ibexClimbingGym: ClimbingGym = {
  name: 'IBEX Climbing Gym',
  address: {
    streetNumber: '801',
    streetName: 'NW South Outer Rd',
    city: 'Blue Springs',
    region: 'MO',
    postalCode: '64015',
    country: 'US',
    latitude: 39.025,
    longitude: -94.290,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
