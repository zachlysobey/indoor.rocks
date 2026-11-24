import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementFountainValley: ClimbingGym = {
  name: 'Movement Fountain Valley',
  website: 'https://movementgyms.com/fountain-valley/',
  description: 'Bouldering gym.',
  parent: movement,
  address: {
    streetNumber: '18030',
    streetName: 'Newhope St',
    city: 'Fountain Valley',
    region: 'CA',
    postalCode: '92708',
    country: 'US',
    latitude: 33.710,
    longitude: -117.917,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights', 'sauna'),
};
