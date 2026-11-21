import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ibexClimbingGym: ClimbingGym = {
  name: 'IBEX Climbing Gym',
  address: {
    streetNumber: '801',
    streetName: 'NW South Outer Rd',
    city: 'Blue Springs',
    state: 'MO',
    postalCode: '64015',
    country: 'USA',
    latitude: 39.025,
    longitude: -94.290,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
