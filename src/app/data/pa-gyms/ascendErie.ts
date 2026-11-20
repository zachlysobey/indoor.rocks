import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { ascend } from "../companies/ascend";

export const ascendErie: ClimbingGym = {
  name: 'ASCEND Erie',
  website: 'https://www.ascendclimbing.com/',
  parent: ascend,
  address: {
    streetNumber: '426',
    streetName: 'State St',
    city: 'Erie',
    state: 'PA',
    postalCode: '16501',
    country: 'USA',
    latitude: 42.130,
    longitude: -80.086,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
