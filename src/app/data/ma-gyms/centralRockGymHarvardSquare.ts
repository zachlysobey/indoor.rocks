import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymHarvardSquare: ClimbingGym = {
  name: 'Central Rock Gym Harvard Square',
  website: 'https://centralrockgym.com/harvard-square/',
  description: 'Bouldering only, in the Abbot Building. Opened 2022.',
  parent: centralRockGym,
  address: {
    streetNumber: '20',
    streetName: 'Brattle St, Ste 220',
    city: 'Cambridge',
    region: 'MA',
    postalCode: '02138',
    country: 'US',
    latitude: 42.374,
    longitude: -71.122,
  },
  amenities: amenities('bouldering', 'yoga'),
};
