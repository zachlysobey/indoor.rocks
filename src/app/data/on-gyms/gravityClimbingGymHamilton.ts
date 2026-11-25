import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityClimbingGym } from "../companies/gravityClimbingGym";

export const gravityClimbingGymHamilton: ClimbingGym = {
  name: 'Gravity Climbing Gym Hamilton',
  description: 'Walls up to 50 feet.',
  parent: gravityClimbingGym,
  address: {
    streetNumber: '70',
    streetName: 'Frid St, Unit 6',
    city: 'Hamilton',
    region: 'ON',
    postalCode: 'L8P 4M4',
    country: 'CA',
    latitude: 43.258,
    longitude: -79.893,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
