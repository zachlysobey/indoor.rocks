import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const californiaClimbingCollective: ClimbingGym = {
  name: 'California Climbing Collective',
  website: 'https://californiaclimbingcollective.com',
  description: 'Bouldering gym in SoMa.',
  address: {
    streetNumber: '1264',
    streetName: 'Folsom St',
    city: 'San Francisco',
    region: 'CA',
    postalCode: '94103',
    country: 'US',
    latitude: 37.774,
    longitude: -122.412,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
