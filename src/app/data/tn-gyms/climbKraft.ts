import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbNashville } from "../companies/climbNashville";

export const climbKraft: ClimbingGym = {
  name: 'Climb Kraft',
  description: 'Bouldering only.',
  parent: climbNashville,
  address: {
    streetNumber: '2926',
    streetName: 'Kraft Dr',
    city: 'Nashville',
    region: 'TN',
    postalCode: '37204',
    country: 'US',
    latitude: 36.112,
    longitude: -86.758,
  },
  amenities: amenities('bouldering'),
};
