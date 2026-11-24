import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const fluxClimbing: ClimbingGym = {
  name: 'Flux Climbing',
  website: 'https://fluxclimbing.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1765',
    streetName: 'Columbia Ave',
    city: 'Rossland',
    region: 'BC',
    postalCode: 'V0G 1Y0',
    country: 'CA',
    latitude: 49.081,
    longitude: -117.805,
  },
  amenities: amenities('bouldering'),
};
