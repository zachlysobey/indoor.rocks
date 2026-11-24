import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbSoIll } from "../companies/climbSoIll";

export const climbSoIllSteelShop: ClimbingGym = {
  name: 'Climb So iLL Steel Shop',
  description: 'In Frenchtown.',
  parent: climbSoIll,
  address: {
    streetNumber: '650',
    streetName: 'N Main Center',
    city: 'St. Charles',
    region: 'MO',
    postalCode: '63301',
    country: 'US',
    latitude: 38.789,
    longitude: -90.484,
  },
  amenities: amenities('top-rope', 'auto-belays'),
};
