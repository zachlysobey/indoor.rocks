import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ofRockAndChalk: ClimbingGym = {
  name: 'Of Rock and Chalk',
  address: {
    streetNumber: '482',
    streetName: 'Ontario St',
    city: 'Newmarket',
    region: 'ON',
    postalCode: 'L3Y',
    country: 'CA',
    latitude: 44.058,
    longitude: -79.452,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};
