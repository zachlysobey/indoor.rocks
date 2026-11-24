import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementSunnyvale: ClimbingGym = {
  name: 'Movement Sunnyvale',
  website: 'https://movementgyms.com/sunnyvale/',
  parent: movement,
  address: {
    streetNumber: '815',
    streetName: 'Stewart Dr',
    city: 'Sunnyvale',
    region: 'CA',
    postalCode: '94085',
    country: 'US',
    latitude: 37.383,
    longitude: -122.001,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga', 'sauna'),
};
