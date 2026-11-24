import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbLawrence: ClimbingGym = {
  name: 'Climb Lawrence',
  website: 'https://www.climblawrence.com',
  address: {
    streetNumber: '714',
    streetName: 'Vermont St',
    city: 'Lawrence',
    region: 'KS',
    postalCode: '66044',
    country: 'US',
    latitude: 38.970,
    longitude: -95.237,
  },
  amenities: amenities('bouldering', 'auto-belays', 'free-weights', 'yoga'),
};
