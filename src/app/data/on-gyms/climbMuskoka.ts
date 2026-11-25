import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbMuskoka: ClimbingGym = {
  name: 'Climb Muskoka',
  website: 'https://climbmuskoka.com',
  address: {
    streetNumber: '24',
    streetName: 'Kirkhill Dr',
    city: 'Bracebridge',
    region: 'ON',
    postalCode: 'P1L 0A1',
    country: 'CA',
    latitude: 45.042,
    longitude: -79.290,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
