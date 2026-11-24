import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hangar18 } from "../companies/hangar18";

export const hangar18LongBeach: ClimbingGym = {
  name: 'Hangar 18 Long Beach',
  website: 'https://climbhangar18.com/long-beach/',
  parent: hangar18,
  address: {
    streetNumber: '2599',
    streetName: 'E Willow St',
    city: 'Signal Hill',
    region: 'CA',
    postalCode: '90755',
    country: 'US',
    latitude: 33.804,
    longitude: -118.163,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};
