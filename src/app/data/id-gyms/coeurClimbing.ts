import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const coeurClimbing: ClimbingGym = {
  name: 'Coeur Climbing Company',
  address: {
    streetNumber: '764',
    streetName: 'S Clearwater Loop, Ste 101',
    city: 'Post Falls',
    region: 'ID',
    postalCode: '83854',
    country: 'US',
    latitude: 47.706,
    longitude: -116.960,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};
