import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const newJerseyRockGym: ClimbingGym = {
  name: 'New Jersey Rock Gym',
  website: 'https://njrockgym.com/',
  address: {
    streetNumber: '373',
    streetName: 'US-46, Bldg D',
    city: 'Fairfield',
    region: 'NJ',
    postalCode: '07004',
    country: 'US',
    latitude: 40.881,
    longitude: -74.296,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
