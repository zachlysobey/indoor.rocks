import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymFenway: ClimbingGym = {
  name: 'Central Rock Gym Fenway',
  website: 'https://centralrockgym.com/fenway/',
  description: 'Bouldering only, next to Fenway Park. Opened 2022.',
  parent: centralRockGym,
  address: {
    streetNumber: '5',
    streetName: 'David Ortiz Dr',
    city: 'Boston',
    state: 'MA',
    postalCode: '02215',
    country: 'USA',
    latitude: 42.347,
    longitude: -71.101,
  },
  amenities: amenities('bouldering', 'yoga'),
};
