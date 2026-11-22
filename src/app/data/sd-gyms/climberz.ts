import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climberz: ClimbingGym = {
  name: 'Climberz',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1207',
    streetName: 'N Carla Ave',
    city: 'Tea',
    state: 'SD',
    postalCode: '57064',
    country: 'USA',
    latitude: 43.459,
    longitude: -96.840,
  },
  amenities: amenities('bouldering', 'yoga'),
};
