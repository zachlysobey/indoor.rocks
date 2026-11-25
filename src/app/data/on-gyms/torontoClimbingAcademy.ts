import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const torontoClimbingAcademy: ClimbingGym = {
  name: 'Toronto Climbing Academy',
  website: 'http://www.climbingacademy.com',
  description: 'Walls with simulated rock features.',
  address: {
    streetNumber: '11',
    streetName: 'Curity Ave, Unit 3',
    city: 'Toronto',
    region: 'ON',
    postalCode: 'M4B 1X4',
    country: 'CA',
    latitude: 43.706,
    longitude: -79.312,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
