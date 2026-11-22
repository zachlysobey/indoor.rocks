import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementMountainView: ClimbingGym = {
  name: 'Movement Mountain View',
  website: 'https://movementgyms.com/mountain-view/',
  description: 'Bouldering only.',
  parent: movement,
  address: {
    streetNumber: '630',
    streetName: 'San Antonio Rd',
    city: 'Mountain View',
    state: 'CA',
    postalCode: '94040',
    country: 'USA',
    latitude: 37.401,
    longitude: -122.112,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};
