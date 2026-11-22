import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const approachClimbingGym: ClimbingGym = {
  name: 'Approach Climbing Gym',
  address: {
    streetNumber: '4923',
    streetName: 'S 72nd St',
    city: 'Omaha',
    state: 'NE',
    postalCode: '68127',
    country: 'USA',
    latitude: 41.208,
    longitude: -96.023,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
