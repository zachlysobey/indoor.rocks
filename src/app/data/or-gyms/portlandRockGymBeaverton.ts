import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { portlandRockGym } from "../companies/portlandRockGym";

export const portlandRockGymBeaverton: ClimbingGym = {
  name: 'Portland Rock Gym Beaverton',
  website: 'https://www.portlandrockgym.com/beaverton/',
  description: 'Includes a speed wall and covered outdoor bouldering.',
  parent: portlandRockGym,
  address: {
    streetNumber: '10860',
    streetName: 'SW Barnes Rd',
    city: 'Portland',
    region: 'OR',
    postalCode: '97225',
    country: 'US',
    latitude: 45.515,
    longitude: -122.785,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga', 'sauna'),
};
