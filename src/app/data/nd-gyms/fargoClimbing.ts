import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const fargoClimbing: ClimbingGym = {
  name: 'Fargo Climbing',
  description: 'Bouldering only.',
  address: {
    streetNumber: '2325',
    streetName: '46th St S',
    city: 'Fargo',
    region: 'ND',
    postalCode: '58104',
    country: 'US',
    latitude: 46.843,
    longitude: -96.864,
  },
  amenities: amenities('bouldering'),
};
