import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymWestHartford: ClimbingGym = {
  name: 'Central Rock Gym West Hartford',
  website: 'https://centralrockgym.com/west-hartford/',
  description: 'Bouldering only. Opened 2023.',
  parent: centralRockGym,
  address: {
    streetNumber: '99',
    streetName: 'Shield St',
    city: 'West Hartford',
    state: 'CT',
    postalCode: '06110',
    country: 'USA',
    latitude: 41.727,
    longitude: -72.722,
  },
  amenities: amenities('bouldering'),
};
