import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const chakstoneIndoorClimbing: ClimbingGym = {
  name: 'Chakstone Indoor Climbing',
  description: 'Formerly Wilkes-Barre Rock Climbing Gym.',
  address: {
    streetNumber: '102',
    streetName: 'S Main St',
    city: 'Wilkes-Barre',
    state: 'PA',
    postalCode: '18701',
    country: 'USA',
    latitude: 41.244,
    longitude: -75.883,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
