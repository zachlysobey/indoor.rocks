import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const stoneAgeRockGym: ClimbingGym = {
  name: 'Stone Age Rock Gym',
  website: 'https://www.stoneagerockgym.com/',
  address: {
    streetNumber: '195',
    streetName: 'Adams St',
    city: 'Manchester',
    region: 'CT',
    postalCode: '06042',
    country: 'US',
    latitude: 41.79024,
    longitude: -72.54961,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
