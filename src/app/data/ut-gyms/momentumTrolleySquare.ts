import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { momentum } from "../companies/momentum";

export const momentumTrolleySquare: ClimbingGym = {
  name: 'Momentum Trolley Square',
  website: 'https://momentumclimbing.com/trolleysquare/',
  description: 'Bouldering only.',
  parent: momentum,
  address: {
    streetNumber: '602',
    streetName: 'E 500 S',
    city: 'Salt Lake City',
    state: 'UT',
    postalCode: '84102',
    country: 'USA',
    latitude: 40.757,
    longitude: -111.873,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'sauna'),
};
