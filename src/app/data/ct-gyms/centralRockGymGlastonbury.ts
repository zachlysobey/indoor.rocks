import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymGlastonbury: ClimbingGym = {
  name: 'Central Rock Gym Glastonbury',
  website: 'https://centralrockgym.com/glastonbury/',
  parent: centralRockGym,
  address: {
    streetNumber: '259',
    streetName: 'Eastern Blvd',
    city: 'Glastonbury',
    region: 'CT',
    postalCode: '06033',
    country: 'US',
    latitude: 41.723,
    longitude: -72.579,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
