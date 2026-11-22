import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const bluestemBoulders: ClimbingGym = {
  name: 'Bluestem Boulders',
  description: 'Bouldering only.',
  address: {
    streetNumber: '539',
    streetName: 'E 2nd St',
    city: 'Ames',
    state: 'IA',
    postalCode: '50010',
    country: 'USA',
    latitude: 42.025,
    longitude: -93.604,
  },
  amenities: amenities('bouldering'),
};
