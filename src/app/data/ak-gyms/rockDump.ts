import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockDump: ClimbingGym = {
  name: 'The Rock Dump',
  website: 'https://www.rockdump.com',
  description: 'Run by the nonprofit Juneau Climbing & Recreation.',
  address: {
    streetNumber: '1310',
    streetName: 'Eastaugh Way',
    city: 'Juneau',
    region: 'AK',
    postalCode: '99801',
    country: 'US',
    latitude: 58.290,
    longitude: -134.396,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
