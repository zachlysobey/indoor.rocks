import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { centralRockGym } from "../companies";

export const centralRockGymWestHartford: ClimbingGym = {
  name: 'Central Rock Gym West Hartford',
  description: 'Bouldering only. Opened 2023.',
  parent: centralRockGym,
  address: {
    streetNumber: '99',
    streetName: 'Shield St',
    city: 'West Hartford',
    state: 'CT',
    postalCode: '06110',
    country: 'USA',
  },
  amenities: amenities('bouldering'),
};
