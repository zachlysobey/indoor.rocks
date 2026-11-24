import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const canmoreClimbingGym: ClimbingGym = {
  name: 'Canmore Climbing Gym',
  description: 'Focused on bouldering.',
  address: {
    streetNumber: '1404',
    streetName: 'Railway Ave',
    city: 'Canmore',
    region: 'AB',
    postalCode: 'T1W 1P6',
    country: 'CA',
    latitude: 51.087,
    longitude: -115.344,
  },
  amenities: amenities('bouldering'),
};
