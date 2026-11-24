import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockCityClimbing: ClimbingGym = {
  name: 'Rock City Climbing',
  website: 'https://www.rockcityclimbing.com/',
  address: {
    streetNumber: '16942',
    streetName: 'Gothard St',
    city: 'Huntington Beach',
    region: 'CA',
    postalCode: '92647',
    country: 'US',
    latitude: 33.713,
    longitude: -118.006,
  },
  amenities: amenities(),
};
