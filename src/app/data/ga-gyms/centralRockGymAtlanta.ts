import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymAtlanta: ClimbingGym = {
  name: 'Central Rock Gym Atlanta',
  website: 'https://centralrockgym.com/atlanta/',
  description: 'Formerly Stone Summit.',
  parent: centralRockGym,
  address: {
    streetNumber: '3701',
    streetName: 'Presidential Pkwy',
    city: 'Atlanta',
    region: 'GA',
    postalCode: '30340',
    country: 'US',
    latitude: 33.890,
    longitude: -84.257,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
