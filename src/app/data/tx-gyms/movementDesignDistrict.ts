import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementDesignDistrict: ClimbingGym = {
  name: 'Movement Design District',
  website: 'https://movementgyms.com/design-district/',
  parent: movement,
  address: {
    streetNumber: '141',
    streetName: 'Glass St',
    city: 'Dallas',
    state: 'TX',
    postalCode: '75207',
    country: 'USA',
    latitude: 32.797,
    longitude: -96.826,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga', 'sauna'),
};
