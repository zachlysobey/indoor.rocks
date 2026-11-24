import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymCambridge: ClimbingGym = {
  name: 'Central Rock Gym Cambridge',
  website: 'https://centralrockgym.com/cambridge/',
  description: 'Training-focused bouldering gym near Alewife.',
  parent: centralRockGym,
  address: {
    streetNumber: '170',
    streetName: 'Alewife Brook Pkwy',
    city: 'Cambridge',
    region: 'MA',
    postalCode: '02140',
    country: 'US',
    latitude: 42.393,
    longitude: -71.141,
  },
  amenities: amenities('bouldering', 'yoga', 'sauna'),
};
