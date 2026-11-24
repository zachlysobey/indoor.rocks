import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { momentum } from "../companies/momentum";

export const momentumFortUnion: ClimbingGym = {
  name: 'Momentum Fort Union',
  website: 'https://momentumclimbing.com/fortunion/',
  parent: momentum,
  address: {
    streetNumber: '7210',
    streetName: 'S Union Park Ave',
    city: 'Midvale',
    region: 'UT',
    postalCode: '84047',
    country: 'US',
    latitude: 40.620,
    longitude: -111.858,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga'),
};
