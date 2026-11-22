import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const recreateClimbing: ClimbingGym = {
  name: 'Recreate Climbing & Fitness',
  description: 'Bouldering only, plus a functional fitness gym.',
  address: {
    streetNumber: '1101',
    streetName: 'Utah Ave',
    city: 'Butte',
    state: 'MT',
    postalCode: '59701',
    country: 'USA',
    latitude: 46.006,
    longitude: -112.530,
  },
  amenities: amenities('bouldering'),
};
