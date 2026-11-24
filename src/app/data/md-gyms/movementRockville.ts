import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementRockville: ClimbingGym = {
  name: 'Movement Rockville',
  website: 'https://movementgyms.com/rockville/',
  description: 'Formerly Earth Treks Rockville.',
  parent: movement,
  address: {
    streetNumber: '725',
    streetName: 'Rockville Pike',
    city: 'Rockville',
    region: 'MD',
    postalCode: '20852',
    country: 'US',
    latitude: 39.078,
    longitude: -77.143,
  },
  amenities: amenities(),
};
