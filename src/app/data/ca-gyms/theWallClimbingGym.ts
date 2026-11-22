import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theWallClimbingGym: ClimbingGym = {
  name: 'The Wall Climbing Gym',
  website: 'https://www.thewallclimbinggym.com/',
  description: 'Bouldering gym with yoga studio.',
  address: {
    streetNumber: '1210',
    streetName: 'Keystone Way',
    city: 'Vista',
    state: 'CA',
    postalCode: '92081',
    country: 'USA',
    latitude: 33.138,
    longitude: -117.224,
  },
  amenities: amenities('bouldering', 'yoga', 'arial-silks'),
};
