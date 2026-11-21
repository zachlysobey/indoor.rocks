import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const riseUpClimbing: ClimbingGym = {
  name: 'Rise Up Climbing',
  address: {
    streetNumber: '1225',
    streetName: 'Church St',
    city: 'Lynchburg',
    state: 'VA',
    postalCode: '24504',
    country: 'USA',
    latitude: 37.416,
    longitude: -79.145,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
