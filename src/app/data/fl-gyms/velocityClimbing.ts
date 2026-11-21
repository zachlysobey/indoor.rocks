import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const velocityClimbing: ClimbingGym = {
  name: 'Velocity Climbing',
  address: {
    streetNumber: '2280',
    streetName: 'NW 41st St',
    city: 'Miami',
    state: 'FL',
    postalCode: '33142',
    country: 'USA',
    latitude: 25.813,
    longitude: -80.232,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
