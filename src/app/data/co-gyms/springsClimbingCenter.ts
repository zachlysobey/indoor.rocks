import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const springsClimbingCenter: ClimbingGym = {
  name: 'Springs Climbing Center',
  website: 'https://springsclimbingcenter.com/',
  address: {
    streetNumber: '4642',
    streetName: 'Northpark Dr',
    city: 'Colorado Springs',
    region: 'CO',
    postalCode: '80918',
    country: 'US',
    latitude: 38.900,
    longitude: -104.818,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};
