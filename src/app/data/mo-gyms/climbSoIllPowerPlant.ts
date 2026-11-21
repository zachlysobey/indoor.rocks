import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbSoIll } from "../companies/climbSoIll";

export const climbSoIllPowerPlant: ClimbingGym = {
  name: 'Climb So iLL Power Plant',
  parent: climbSoIll,
  address: {
    streetNumber: '1419',
    streetName: 'Carroll St',
    city: 'St. Louis',
    state: 'MO',
    postalCode: '63104',
    country: 'USA',
    latitude: 38.612,
    longitude: -90.198,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
