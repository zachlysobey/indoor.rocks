import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymBuffalo: ClimbingGym = {
  name: 'Central Rock Gym Buffalo',
  website: 'https://centralrockgym.com/buffalo/',
  parent: centralRockGym,
  address: {
    streetNumber: '55',
    streetName: 'Chicago St',
    city: 'Buffalo',
    region: 'NY',
    postalCode: '14204',
    country: 'US',
    latitude: 42.871,
    longitude: -78.866,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga', 'sauna'),
};
