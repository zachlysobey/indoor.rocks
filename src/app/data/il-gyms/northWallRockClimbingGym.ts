import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const northWallRockClimbingGym: ClimbingGym = {
  name: 'North Wall Rock Climbing Gym',
  website: 'http://www.climbnorthwall.com/',
  address: {
    streetNumber: '824',
    streetName: 'S Main St',
    city: 'Crystal Lake',
    state: 'IL',
    postalCode: '60014',
    country: 'USA',
    latitude: 42.232,
    longitude: -88.320,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
