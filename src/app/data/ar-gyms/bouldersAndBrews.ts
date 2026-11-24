import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const bouldersAndBrews: ClimbingGym = {
  name: 'Boulders and Brews',
  website: 'https://www.bouldersandbrews.com',
  description: 'Bouldering only, with a coffee lounge.',
  address: {
    streetNumber: '612',
    streetName: 'W Dickson St',
    city: 'Fayetteville',
    region: 'AR',
    postalCode: '72701',
    country: 'US',
    latitude: 36.066,
    longitude: -94.166,
  },
  amenities: amenities('bouldering'),
};
