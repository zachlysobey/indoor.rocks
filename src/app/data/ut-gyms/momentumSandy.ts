import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { momentum } from "../companies/momentum";

export const momentumSandy: ClimbingGym = {
  name: 'Momentum Sandy',
  website: 'https://momentumclimbing.com/sandy/',
  parent: momentum,
  address: {
    streetNumber: '220',
    streetName: 'W 10600 S',
    city: 'Sandy',
    region: 'UT',
    postalCode: '84070',
    country: 'US',
    latitude: 40.556,
    longitude: -111.898,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
