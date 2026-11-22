import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rokc } from "../companies/rokc";

export const rokcNorth: ClimbingGym = {
  name: 'RoKC North',
  parent: rokc,
  address: {
    streetNumber: '1501',
    streetName: 'Howell St',
    city: 'North Kansas City',
    state: 'MO',
    postalCode: '64116',
    country: 'USA',
    latitude: 39.140,
    longitude: -94.565,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
