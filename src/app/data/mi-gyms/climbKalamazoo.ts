import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbKalamazoo: ClimbingGym = {
  name: 'Climb Kalamazoo',
  address: {
    streetNumber: '136',
    streetName: 'S Kalamazoo Mall',
    city: 'Kalamazoo',
    region: 'MI',
    postalCode: '49007',
    country: 'US',
    latitude: 42.291,
    longitude: -85.585,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
