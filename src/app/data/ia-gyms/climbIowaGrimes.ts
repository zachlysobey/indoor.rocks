import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbIowa } from "../companies/climbIowa";

export const climbIowaGrimes: ClimbingGym = {
  name: 'Climb Iowa Grimes',
  parent: climbIowa,
  address: {
    streetNumber: '3605',
    streetName: 'SE Miehe Dr',
    city: 'Grimes',
    region: 'IA',
    postalCode: '50111',
    country: 'US',
    latitude: 41.665,
    longitude: -93.770,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
