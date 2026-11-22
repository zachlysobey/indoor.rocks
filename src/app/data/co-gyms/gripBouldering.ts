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
    state: 'CO',
    postalCode: '81505',
    country: 'USA',
    latitude: 39.083,
    longitude: -108.590,
  },
  amenities: amenities('bouldering'),
};
