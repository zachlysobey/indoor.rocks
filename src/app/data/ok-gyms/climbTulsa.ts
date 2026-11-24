import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbTulsa: ClimbingGym = {
  name: 'Climb Tulsa',
  website: 'https://www.climbtulsa.com',
  address: {
    streetNumber: '4923',
    streetName: 'E 32nd St',
    city: 'Tulsa',
    region: 'OK',
    postalCode: '74135',
    country: 'US',
    latitude: 36.120,
    longitude: -95.925,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};
