import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { ubergrippen } from "../companies/ubergrippen";

export const ubergrippenDenver: ClimbingGym = {
  name: 'Übergrippen Denver',
  website: 'https://ugclimbing.com/denver',
  parent: ubergrippen,
  address: {
    streetNumber: '8610',
    streetName: 'E 21st Ave',
    city: 'Denver',
    region: 'CO',
    postalCode: '80238',
    country: 'US',
    latitude: 39.749,
    longitude: -104.887,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};
