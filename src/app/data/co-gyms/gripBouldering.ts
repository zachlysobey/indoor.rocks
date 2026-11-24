import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gripBouldering: ClimbingGym = {
  name: 'Grip Bouldering',
  website: 'https://www.gripbouldering.com/',
  description: 'Bouldering gym.',
  address: {
    streetNumber: '716',
    streetName: 'Scarlet St',
    city: 'Grand Junction',
    region: 'CO',
    postalCode: '81505',
    country: 'US',
    latitude: 39.083,
    longitude: -108.590,
  },
  amenities: amenities('bouldering'),
};
