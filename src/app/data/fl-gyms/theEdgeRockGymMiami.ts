import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theEdgeRockGymMiami: ClimbingGym = {
  name: 'The Edge Rock Gym Miami',
  description: 'In West Kendall.',
  address: {
    streetNumber: '13972',
    streetName: 'SW 139th Ct',
    city: 'Miami',
    state: 'FL',
    postalCode: '33186',
    country: 'USA',
    latitude: 25.640,
    longitude: -80.420,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
