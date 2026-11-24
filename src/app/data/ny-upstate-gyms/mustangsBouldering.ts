import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const mustangsBouldering: ClimbingGym = {
  name: 'Mustangs Bouldering',
  website: 'https://mustangsbouldering.com/',
  description: 'Bouldering only, with a café.',
  address: {
    streetNumber: '316',
    streetName: 'Plaza Rd',
    city: 'Kingston',
    region: 'NY',
    postalCode: '12401',
    country: 'US',
    latitude: 41.933,
    longitude: -74.005,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
