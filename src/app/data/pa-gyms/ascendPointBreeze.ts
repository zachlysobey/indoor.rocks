import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { ascend } from "../companies/ascend";

export const ascendPointBreeze: ClimbingGym = {
  name: 'ASCEND Point Breeze',
  website: 'https://www.ascendclimbing.com/',
  parent: ascend,
  address: {
    streetNumber: '7443',
    streetName: 'Thomas Blvd',
    city: 'Pittsburgh',
    state: 'PA',
    postalCode: '15208',
    country: 'USA',
    latitude: 40.454,
    longitude: -79.897,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
