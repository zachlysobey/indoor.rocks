import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const evolutionBoulders: ClimbingGym = {
  name: 'Evolution Boulders',
  description: 'Bouldering only.',
  address: {
    streetNumber: '10371',
    streetName: 'Central Park Dr',
    city: 'Manassas',
    region: 'VA',
    postalCode: '20110',
    country: 'US',
    latitude: 38.763,
    longitude: -77.462,
  },
  amenities: amenities('bouldering'),
};
