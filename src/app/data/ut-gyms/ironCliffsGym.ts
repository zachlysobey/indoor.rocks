import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ironCliffsGym: ClimbingGym = {
  name: 'Iron Cliffs Gym',
  website: 'http://ironcliffs.com/',
  address: {
    streetNumber: '609',
    streetName: 'N 1450 W',
    city: 'Cedar City',
    region: 'UT',
    postalCode: '84721',
    country: 'US',
    latitude: 37.686,
    longitude: -113.088,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga', 'aerial-silks'),
};
