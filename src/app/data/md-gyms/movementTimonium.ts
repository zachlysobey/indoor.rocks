import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementTimonium: ClimbingGym = {
  name: 'Movement Timonium',
  website: 'https://movementgyms.com/timonium/',
  description: 'Formerly Earth Treks Timonium.',
  parent: movement,
  address: {
    streetNumber: '1930',
    streetName: 'Greenspring Dr',
    city: 'Lutherville-Timonium',
    state: 'MD',
    postalCode: '21093',
    country: 'USA',
    latitude: 39.443,
    longitude: -76.626,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
