import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const crimpersClimbingGym: ClimbingGym = {
  name: "Crimper's Climbing Gym",
  website: 'https://www.crimpersclimbing.com',
  address: {
    streetNumber: '100',
    streetName: 'Central Ave',
    city: 'Christiansburg',
    state: 'VA',
    postalCode: '24073',
    country: 'USA',
    latitude: 37.140,
    longitude: -80.405,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
