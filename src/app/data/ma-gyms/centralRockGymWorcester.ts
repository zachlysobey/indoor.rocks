import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymWorcester: ClimbingGym = {
  name: 'Central Rock Gym Worcester',
  website: 'https://centralrockgym.com/worcester/',
  description: 'The original Central Rock Gym, opened 2009.',
  parent: centralRockGym,
  address: {
    streetNumber: '299',
    streetName: 'Barber Ave',
    city: 'Worcester',
    region: 'MA',
    postalCode: '01606',
    country: 'US',
    latitude: 42.297,
    longitude: -71.797,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga', 'sauna'),
};
