import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hangar18 } from "../companies/hangar18";

export const hangar18Riverside: ClimbingGym = {
  name: 'Hangar 18 Riverside',
  website: 'https://climbhangar18.com/riverside/',
  parent: hangar18,
  address: {
    streetNumber: '6935',
    streetName: 'Arlington Ave',
    city: 'Riverside',
    state: 'CA',
    postalCode: '92503',
    country: 'USA',
    latitude: 33.927,
    longitude: -117.442,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
