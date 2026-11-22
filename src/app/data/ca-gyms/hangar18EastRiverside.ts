import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hangar18 } from "../companies/hangar18";

export const hangar18EastRiverside: ClimbingGym = {
  name: 'Hangar 18 East Riverside',
  website: 'https://climbhangar18.com/east-riverside/',
  parent: hangar18,
  address: {
    streetNumber: '2111',
    streetName: 'Iowa Ave',
    city: 'Riverside',
    state: 'CA',
    postalCode: '92507',
    country: 'USA',
    latitude: 33.997,
    longitude: -117.351,
  },
  amenities: amenities('bouldering', 'lead', 'auto-belays', 'yoga'),
};
