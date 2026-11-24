import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theCrag } from "../companies/theCrag";

export const theCragFranklin: ClimbingGym = {
  name: 'The Crag Franklin',
  parent: theCrag,
  address: {
    streetNumber: '1850',
    streetName: 'General George Patton Dr',
    city: 'Franklin',
    region: 'TN',
    postalCode: '37067',
    country: 'US',
    latitude: 35.960,
    longitude: -86.820,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};
