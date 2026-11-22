import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rocaClimbing: ClimbingGym = {
  name: 'Roca Climbing & Fitness',
  address: {
    streetNumber: '6071',
    streetName: 'Rome Cir NW',
    city: 'Rochester',
    state: 'MN',
    postalCode: '55901',
    country: 'USA',
    latitude: 44.070,
    longitude: -92.518,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
