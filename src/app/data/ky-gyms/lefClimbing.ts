import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const lefClimbing: ClimbingGym = {
  name: 'LEF Climbing',
  website: 'https://www.lefclimbing.com',
  description: 'Day passes by reservation.',
  address: {
    streetNumber: '916',
    streetName: 'N Broadway',
    city: 'Lexington',
    state: 'KY',
    postalCode: '40505',
    country: 'USA',
    latitude: 38.064,
    longitude: -84.493,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
};
