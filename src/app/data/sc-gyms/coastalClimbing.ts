import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const coastalClimbing: ClimbingGym = {
  name: 'Coastal Climbing',
  description: 'Bouldering only.',
  address: {
    streetNumber: '708',
    streetName: 'King St',
    city: 'Charleston',
    state: 'SC',
    postalCode: '29403',
    country: 'USA',
    latitude: 32.797,
    longitude: -79.948,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
