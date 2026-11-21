import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbingNewHeights: ClimbingGym = {
  name: 'Climbing New Heights',
  address: {
    streetNumber: '54',
    streetName: 'GM Access Rd',
    city: 'Martinsburg',
    state: 'WV',
    postalCode: '25403',
    country: 'USA',
    latitude: 39.475,
    longitude: -77.950,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
