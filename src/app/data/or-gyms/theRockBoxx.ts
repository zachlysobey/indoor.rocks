import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theRockBoxx: ClimbingGym = {
  name: 'The Rock Boxx',
  website: 'https://www.therockboxx.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '3895',
    streetName: 'Cascadia Canyon Ave SE',
    city: 'Salem',
    region: 'OR',
    postalCode: '97302',
    country: 'US',
    latitude: 44.886,
    longitude: -123.040,
  },
  amenities: amenities('bouldering'),
};
