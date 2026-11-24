import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const stonetreeClimbing: ClimbingGym = {
  name: 'Stonetree Climbing Center',
  website: 'https://www.stonetreeclimbing.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1222',
    streetName: 'Bozeman Ave',
    city: 'Helena',
    region: 'MT',
    postalCode: '59601',
    country: 'US',
    latitude: 46.597,
    longitude: -112.031,
  },
  amenities: amenities('bouldering', 'yoga'),
};
