import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { momentum } from "../companies/momentum";

export const momentumLehi: ClimbingGym = {
  name: 'Momentum Lehi',
  website: 'https://momentumclimbing.com/lehi/',
  description: 'Bouldering only.',
  parent: momentum,
  address: {
    streetNumber: '401',
    streetName: 'S 850 E',
    city: 'Lehi',
    region: 'UT',
    postalCode: '84043',
    country: 'US',
    latitude: 40.388,
    longitude: -111.834,
  },
  amenities: amenities('bouldering', 'machines', 'yoga'),
};
