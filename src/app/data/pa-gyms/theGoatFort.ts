import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theGoatFort: ClimbingGym = {
  name: 'The Goat Fort',
  website: 'https://www.goatfort.com/',
  address: {
    streetNumber: '20',
    streetName: 'Clark St',
    city: 'Warren',
    region: 'PA',
    postalCode: '16365',
    country: 'US',
    latitude: 41.844,
    longitude: -79.146,
  },
  amenities: amenities('bouldering'),
};
