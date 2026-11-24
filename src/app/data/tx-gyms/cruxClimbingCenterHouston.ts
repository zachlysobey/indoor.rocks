import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { crux } from "../companies/crux";

export const cruxClimbingCenterHouston: ClimbingGym = {
  name: 'Crux Climbing Center Houston',
  website: 'https://www.cruxclimbingcenter.com/houston/',
  description: 'Bouldering gym at The Plant; opened Sept 2026.',
  parent: crux,
  address: {
    streetNumber: '3100',
    streetName: 'Canal St',
    city: 'Houston',
    region: 'TX',
    postalCode: '77003',
    country: 'US',
    latitude: 29.752,
    longitude: -95.338,
  },
  amenities: amenities('bouldering', 'yoga', 'sauna'),
};
