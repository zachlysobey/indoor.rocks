import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementPlano: ClimbingGym = {
  name: 'Movement Plano',
  website: 'https://movementgyms.com/plano/',
  parent: movement,
  address: {
    streetNumber: '525',
    streetName: 'Talbert Dr',
    city: 'Plano',
    state: 'TX',
    postalCode: '75093',
    country: 'USA',
    latitude: 33.025,
    longitude: -96.836,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
