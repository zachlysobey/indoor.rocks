import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const enduranceClimbing: ClimbingGym = {
  name: 'Endurance Climbing',
  website: 'https://www.enduranceclimbing.com/',
  description: 'Formerly Riverstone Climbing Gym.',
  address: {
    streetNumber: '1625',
    streetName: 'S Walnut St',
    city: 'Burlington',
    region: 'WA',
    postalCode: '98233',
    country: 'US',
    latitude: 48.463,
    longitude: -122.334,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
