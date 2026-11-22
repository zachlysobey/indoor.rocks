import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbAtTheLoop: ClimbingGym = {
  name: 'CLIMB @ the Loop',
  description: 'Bouldering only.',
  address: {
    streetNumber: '488',
    streetName: 'Milwaukee Ave',
    city: 'Burlington',
    state: 'WI',
    postalCode: '53105',
    country: 'USA',
    latitude: 42.680,
    longitude: -88.277,
  },
  amenities: amenities('bouldering'),
};
