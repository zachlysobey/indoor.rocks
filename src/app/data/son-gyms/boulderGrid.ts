import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const boulderGrid: ClimbingGym = {
  name: 'Boulder Grid',
  website: 'https://bouldergrid.com',
  address: {
    streetNumber: '12',
    streetName: 'Naranjo',
    city: 'Hermosillo',
    region: 'SON',
    postalCode: '83190',
    country: 'MX',
    latitude: 29.095,
    longitude: -110.960,
  },
  amenities: amenities('bouldering', 'yoga'),
};
