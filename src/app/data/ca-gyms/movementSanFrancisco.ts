import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementSanFrancisco: ClimbingGym = {
  name: 'Movement San Francisco',
  website: 'https://movementgyms.com/san-francisco/',
  parent: movement,
  address: {
    streetNumber: '924',
    streetName: 'Mason St',
    city: 'San Francisco',
    region: 'CA',
    postalCode: '94129',
    country: 'US',
    latitude: 37.803,
    longitude: -122.452,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga', 'sauna'),
};
