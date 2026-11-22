import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const milwaukeeTurners: ClimbingGym = {
  name: 'Milwaukee Turners Climbing Gym',
  website: 'https://www.milwaukeeturners.org/rock-climbing',
  description: 'In the historic Turner Hall; run by the nonprofit Milwaukee Turners.',
  address: {
    streetNumber: '1034',
    streetName: 'N Vel R. Phillips Ave',
    city: 'Milwaukee',
    state: 'WI',
    postalCode: '53203',
    country: 'USA',
    latitude: 43.043,
    longitude: -87.915,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
