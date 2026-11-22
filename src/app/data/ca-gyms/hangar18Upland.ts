import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hangar18 } from "../companies/hangar18";

export const hangar18Upland: ClimbingGym = {
  name: 'Hangar 18 Upland',
  website: 'https://climbhangar18.com/upland/',
  parent: hangar18,
  address: {
    streetNumber: '256',
    streetName: 'E Stowell St',
    city: 'Upland',
    state: 'CA',
    postalCode: '91786',
    country: 'USA',
    latitude: 34.092,
    longitude: -117.645,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
