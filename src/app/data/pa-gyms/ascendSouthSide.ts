import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { ascend } from "../companies/ascend";

export const ascendSouthSide: ClimbingGym = {
  name: 'ASCEND South Side',
  website: 'https://www.ascendclimbing.com/',
  parent: ascend,
  address: {
    streetNumber: '2141',
    streetName: 'Mary St',
    city: 'Pittsburgh',
    state: 'PA',
    postalCode: '15203',
    country: 'USA',
    latitude: 40.427,
    longitude: -79.978,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
