import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gravityBear: ClimbingGym = {
  name: 'Gravity Bear',
  website: 'https://www.climbgravitybear.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '618',
    streetName: 'E 3rd St',
    city: 'Tulsa',
    region: 'OK',
    postalCode: '74120',
    country: 'US',
    latitude: 36.156,
    longitude: -95.984,
  },
  amenities: amenities('bouldering'),
};
