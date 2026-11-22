import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementBelmont: ClimbingGym = {
  name: 'Movement Belmont',
  website: 'https://movementgyms.com/belmont/',
  parent: movement,
  address: {
    streetNumber: '100',
    streetName: 'El Camino Real',
    city: 'Belmont',
    state: 'CA',
    postalCode: '94002',
    country: 'USA',
    latitude: 37.530,
    longitude: -122.281,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga', 'sauna'),
};
