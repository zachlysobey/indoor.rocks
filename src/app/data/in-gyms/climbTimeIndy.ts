import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbTimeIndy: ClimbingGym = {
  name: 'Climb Time Indy',
  address: {
    streetNumber: '8750',
    streetName: 'Corporation Dr',
    city: 'Indianapolis',
    region: 'IN',
    postalCode: '46256',
    country: 'US',
    latitude: 39.915,
    longitude: -86.035,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
