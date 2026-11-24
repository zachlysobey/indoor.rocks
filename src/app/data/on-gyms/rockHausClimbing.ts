import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockHausClimbing: ClimbingGym = {
  name: 'RockHaus Climbing',
  website: 'https://rockhausclimbing.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '167',
    streetName: 'Chrislea Rd, Unit 5',
    city: 'Vaughan',
    region: 'ON',
    postalCode: 'L4L',
    country: 'CA',
    latitude: 43.795,
    longitude: -79.533,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
