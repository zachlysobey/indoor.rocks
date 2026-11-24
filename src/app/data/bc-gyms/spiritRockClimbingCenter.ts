import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const spiritRockClimbingCenter: ClimbingGym = {
  name: 'Spirit Rock Climbing Center',
  address: {
    streetNumber: '110',
    streetName: 'Deer Park Ave',
    city: 'Kimberley',
    region: 'BC',
    postalCode: 'V1A 2J4',
    country: 'CA',
    latitude: 49.670,
    longitude: -115.977,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
