import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbKalamazoo: ClimbingGym = {
  name: 'Climb Kalamazoo',
  address: {
    streetNumber: '136',
    streetName: 'S Kalamazoo Mall',
    city: 'Kalamazoo',
    state: 'MI',
    postalCode: '49007',
    country: 'USA',
    latitude: 42.291,
    longitude: -85.585,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
