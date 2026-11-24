import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymOrlando: ClimbingGym = {
  name: 'Central Rock Gym Orlando',
  website: 'https://centralrockgym.com',
  parent: centralRockGym,
  address: {
    streetNumber: '1766',
    streetName: 'W Sand Lake Rd',
    city: 'Orlando',
    region: 'FL',
    postalCode: '32809',
    country: 'US',
    latitude: 28.450,
    longitude: -81.405,
  },
  amenities: amenities('bouldering', 'yoga'),
};
