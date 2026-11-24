import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theRiverRock: ClimbingGym = {
  name: 'The River Rock',
  address: {
    streetNumber: '806',
    streetName: 'Wasena Ave SW',
    city: 'Roanoke',
    region: 'VA',
    postalCode: '24015',
    country: 'US',
    latitude: 37.260,
    longitude: -79.950,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
