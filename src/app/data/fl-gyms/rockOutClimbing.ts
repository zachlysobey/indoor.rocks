import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockOutClimbing: ClimbingGym = {
  name: 'Rock Out Climbing Gym',
  description: 'Bouldering only.',
  address: {
    streetNumber: '2001',
    streetName: '98 Palms Blvd',
    city: 'Destin',
    region: 'FL',
    postalCode: '32541',
    country: 'US',
    latitude: 30.393,
    longitude: -86.425,
  },
  amenities: amenities('bouldering'),
};
