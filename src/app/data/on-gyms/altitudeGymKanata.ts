import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { altitudeGym } from "../companies/altitudeGym";

export const altitudeGymKanata: ClimbingGym = {
  name: 'Altitude Gym Kanata',
  website: 'https://altitudegym.ca/en/kanata/',
  description: 'Climbing and Ninja Warrior.',
  parent: altitudeGym,
  address: {
    streetNumber: '501',
    streetName: 'Palladium Dr, Unit 0E5',
    city: 'Kanata',
    region: 'ON',
    postalCode: 'K2V',
    country: 'CA',
    latitude: 45.297,
    longitude: -75.925,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};
