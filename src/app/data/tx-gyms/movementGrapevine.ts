import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementGrapevine: ClimbingGym = {
  name: 'Movement Grapevine',
  website: 'https://movementgyms.com/grapevine/',
  parent: movement,
  address: {
    streetNumber: '3105',
    streetName: 'William D Tate Ave',
    city: 'Grapevine',
    region: 'TX',
    postalCode: '76051',
    country: 'US',
    latitude: 32.897,
    longitude: -97.098,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
