import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const spiritRockClimbingCenter: ClimbingGym = {
  name: 'Spirit Rock Climbing Center',
  address: {
    streetNumber: '110',
    streetName: 'Deer Park Ave',
    city: 'Kimberley',
    state: 'BC',
    postalCode: 'V1A 2J4',
    country: 'Canada',
    latitude: 49.670,
    longitude: -115.977,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
