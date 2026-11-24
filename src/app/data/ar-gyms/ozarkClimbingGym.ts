import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { stoneyard } from "../companies/stoneyard";

export const ozarkClimbingGym: ClimbingGym = {
  name: 'Ozark Climbing Gym',
  parent: stoneyard,
  description: 'Bouldering only.',
  address: {
    streetNumber: '875',
    streetName: 'E Robinson Ave',
    city: 'Springdale',
    region: 'AR',
    postalCode: '72764',
    country: 'US',
    latitude: 36.167,
    longitude: -94.123,
  },
  amenities: amenities('bouldering'),
};
