import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbAtBlueRidge: ClimbingGym = {
  name: 'Climb@Blue Ridge',
  address: {
    streetNumber: '301',
    streetName: 'Bulls Rd',
    city: 'Taylors',
    state: 'SC',
    postalCode: '29687',
    country: 'USA',
    latitude: 34.917,
    longitude: -82.305,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
