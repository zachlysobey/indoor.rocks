import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementColumbia: ClimbingGym = {
  name: 'Movement Columbia',
  website: 'https://movementgyms.com/columbia/',
  description: 'Formerly Earth Treks Columbia.',
  parent: movement,
  address: {
    streetNumber: '7125',
    streetName: 'Columbia Gateway Dr',
    city: 'Columbia',
    state: 'MD',
    postalCode: '21046',
    country: 'USA',
    latitude: 39.188,
    longitude: -76.815,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
