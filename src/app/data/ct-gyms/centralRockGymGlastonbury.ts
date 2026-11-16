import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymGlastonbury: ClimbingGym = {
  name: 'Central Rock Gym Glastonbury',
  parent: centralRockGym,
  address: {
    streetNumber: '259',
    streetName: 'Eastern Blvd',
    city: 'Glastonbury',
    state: 'CT',
    postalCode: '06033',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
