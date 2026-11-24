import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const crimpersClimbingGym: ClimbingGym = {
  name: "Crimper's Climbing Gym",
  website: 'https://www.crimpersclimbing.com',
  address: {
    streetNumber: '100',
    streetName: 'Central Ave',
    city: 'Christiansburg',
    region: 'VA',
    postalCode: '24073',
    country: 'US',
    latitude: 37.140,
    longitude: -80.405,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
