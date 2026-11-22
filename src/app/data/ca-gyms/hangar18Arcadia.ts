import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hangar18 } from "../companies/hangar18";

export const hangar18Arcadia: ClimbingGym = {
  name: 'Hangar 18 Arcadia',
  website: 'https://climbhangar18.com/arcadia/',
  parent: hangar18,
  address: {
    streetNumber: '305',
    streetName: 'N Santa Anita Ave',
    city: 'Arcadia',
    state: 'CA',
    postalCode: '91006',
    country: 'USA',
    latitude: 34.143,
    longitude: -118.034,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};
