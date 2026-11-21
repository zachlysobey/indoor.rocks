import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockyTopClimbing: ClimbingGym = {
  name: 'Rocky Top Climbing',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1729',
    streetName: 'Allied St',
    city: 'Charlottesville',
    state: 'VA',
    postalCode: '22903',
    country: 'USA',
    latitude: 38.054,
    longitude: -78.496,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
