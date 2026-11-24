import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const thePeakOfFremont: ClimbingGym = {
  name: 'The Peak of Fremont',
  website: 'https://thepeakoffremont.com',
  address: {
    streetNumber: '4020',
    streetName: 'Technology Pl',
    city: 'Fremont',
    region: 'CA',
    postalCode: '94538',
    country: 'US',
    latitude: 37.505,
    longitude: -121.973,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
