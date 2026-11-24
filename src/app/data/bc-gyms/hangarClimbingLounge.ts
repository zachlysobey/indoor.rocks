import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const hangarClimbingLounge: ClimbingGym = {
  name: 'The Hangar Climbing Lounge',
  website: 'https://www.hangarclimbing.com',
  description: 'Bouldering only. Members have 24/7 access.',
  address: {
    streetNumber: '5824',
    streetName: 'Sechelt Inlet Rd',
    city: 'Sechelt',
    state: 'BC',
    postalCode: 'V0N 3A3',
    country: 'Canada',
    latitude: 49.483,
    longitude: -123.751,
  },
  amenities: amenities('bouldering'),
};
