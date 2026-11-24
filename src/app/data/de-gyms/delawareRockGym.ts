import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const delawareRockGym: ClimbingGym = {
  name: 'The Delaware Rock Gym',
  address: {
    streetNumber: '520',
    streetName: 'Carson Dr',
    city: 'Bear',
    region: 'DE',
    postalCode: '19701',
    country: 'US',
    latitude: 39.644,
    longitude: -75.653,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};
