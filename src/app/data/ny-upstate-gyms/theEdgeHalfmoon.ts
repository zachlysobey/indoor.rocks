import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theEdgeHalfmoon: ClimbingGym = {
  name: 'The Edge Halfmoon',
  address: {
    streetNumber: '1544',
    streetName: 'Route 9',
    city: 'Clifton Park',
    region: 'NY',
    postalCode: '12065',
    country: 'US',
    latitude: 42.833,
    longitude: -73.737,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
